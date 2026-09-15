"use client";

import React, { useEffect, useState } from "react";
import { getBooks } from "@/api/bookCard";
import BooksCard  from "../_components/_booksCard/page";
import { Slider } from "../_components/_slider/pade";
import CardLoading from "../_components/CardLoading/page";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    title: "Find Your Next Read",
    description:
      "Explore thousands of books and discover stories worth reading.",
  },
];

export default function Book() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<any[]>([]);

  async function loadBook() {
    try {
      setLoading(true);

      const data = await getBooks();

      console.log("data:", data);
      console.log("is array:", Array.isArray(data));

      setBooks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBook();
  }, []);

  return (
    <>
      <Slider slides={slides} />

      {loading ? <CardLoading /> : <BooksCard books={books} />}
    </>
  );
}