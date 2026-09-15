"use client";

import React, { useEffect, useState } from "react";
import { getBooks } from "@/api/bookCard";
import BooksCard  from "../_booksCard/page";
import { Slider } from "../_slider/pade";
import CardLoading from "../CardLoading/page";


const slides = [
  {
    image:  "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    title: "Discover Your Next Book",
    description: "Explore thousands of books, discover new stories, and find your next great read.",
  },
  
]
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<any[]>([]);

  async function loadBook() {
    try {
      setLoading(true);

      const data = await getBooks();

      setBooks(data);
      console.log("data:", data);
    console.log("is array:", Array.isArray(data));

    setBooks(Array.isArray(data) ? data : []);
    setLoading(false);

    } catch (error) {
      console.error("Error fetching books:", error);
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