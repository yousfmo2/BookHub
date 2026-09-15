import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BooksCard({
  books,
}: {
  books: any[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 my-6 sm:grid-cols-2 lg:grid-cols-4">
      {books.map((book: any) => (
       <Link className="block h-full"  key={book?.key} href={`/book/${book.key.replace("/works/", "")}`}>
        <Card
         
          className=" flex h-full w-full relative mx-auto  max-w-sm overflow-hidden pt-0 shadow-2xl shadow-black"
        >
         
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

        
          {book?.cover_i ? (
            <Image
              height={300}
              width={600}
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book?.title || "Book cover"}
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-gray-200">
              No Image
            </div>
          )}

         
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">Book</Badge>
            </CardAction>

            <CardTitle>
              {book?.title || "Unknown title"}
            </CardTitle>

            <CardDescription>
              <p>
                {book?.subtitle || "No subtitle"}
              </p>

              <p>
                <span className="font-semibold">
                  Author name:
                </span>{" "}
                {book?.author_name?.join(", ") || "Unknown Author"}
              </p>

              <p>
                <span className="font-semibold">
                  First publish year:
                </span>{" "}
                {book?.first_publish_year || "Unknown"}
              </p>
              <p>
                <span className="font-semibold">Language.  </span>
                 {book?.language?.join(", ") || "Unknown Language"}
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
       </Link>
      ))}
    </div>
  );
}



