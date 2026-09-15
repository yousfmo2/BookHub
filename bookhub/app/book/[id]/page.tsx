
import { getBooks } from "@/api/bookCard";
import Image from "next/image";
import Link from "next/link";


type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function BooksDetail({ params }: Props) {
  const { id } = await params;

  const books = await getBooks();

  const book = books.find(
    (item: any) => item.key.replace("/works/", "") === id
  );

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Book not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <Link
          href="/book"
          className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to Books
        </Link>

        {/* Details */}
        <div className="grid overflow-hidden rounded-2xl border bg-card shadow-xl md:grid-cols-2">

          {/* Image */}
          <div className="flex items-center justify-center bg-muted p-8">
            {book.cover_i ? (
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title || "Book cover"}
                width={400}
                height={600}
                className="max-h-[600px] w-auto rounded-xl object-cover shadow-lg"
              />
            ) : (
              <div className="flex h-[500px] w-full items-center justify-center">
                No Image
              </div>
            )}
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-8">

            <span className="mb-4 w-fit rounded-full bg-secondary px-3 py-1 text-sm">
              Book
            </span>

            <h1 className="text-3xl font-bold">
              {book.title || "Unknown title"}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {book.subtitle || "No subtitle"}
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm text-muted-foreground">
                  Author
                </p>

                <p className="font-semibold">
                  {book.author_name?.join(", ") || "Unknown Author"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  First Publish Year
                </p>

                <p className="font-semibold">
                  {book.first_publish_year || "Unknown"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Language
                </p>

                <p className="font-semibold">
                  {book.language?.join(", ") || "Unknown Language"}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Book ID
                </p>

                <p className="break-all font-semibold">
                  {book.key}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

