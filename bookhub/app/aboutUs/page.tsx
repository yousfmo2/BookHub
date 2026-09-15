
import Link from "next/link";
import {
  BookOpen,
  Search,
  Library,
  Code2,
  Database,
  Smartphone,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            About BookHub
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Discover Your Next
            <span className="block text-primary">
              Favorite Book
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            BookHub is a simple and modern platform that helps you
            discover books and explore useful information about your
            favorite titles.
          </p>

          <Link
            href="/book"
            className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Explore Books
          </Link>

        </div>
      </section>


      {/* What is BookHub */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What is BookHub?
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A simple place for book discovery
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              BookHub was created to make discovering books simple and
              enjoyable. You can browse books, explore their information,
              and open a dedicated details page for each book.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              The project focuses on creating a clean, responsive,
              and user-friendly experience using modern frontend
              technologies.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <BookOpen className="h-8 w-8 text-primary" />

              <h3 className="mt-5 font-semibold">
                Discover
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore different books and discover new titles.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <Search className="h-8 w-8 text-primary" />

              <h3 className="mt-5 font-semibold">
                Explore
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Find useful information about each book.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <Library className="h-8 w-8 text-primary" />

              <h3 className="mt-5 font-semibold">
                Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                View authors, languages, covers, and publication years.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <Smartphone className="h-8 w-8 text-primary" />

              <h3 className="mt-5 font-semibold">
                Responsive
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Designed to work across desktop and mobile devices.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Everything you need to explore books
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              BookHub provides a simple interface for discovering
              and exploring book information.
            </p>
          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border bg-background p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <BookOpen className="h-9 w-9 text-primary" />

              <h3 className="mt-6 text-xl font-semibold">
                Browse Books
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Browse a collection of books and quickly find
                titles that interest you.
              </p>
            </div>


            <div className="rounded-2xl border bg-background p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <Search className="h-9 w-9 text-primary" />

              <h3 className="mt-6 text-xl font-semibold">
                Explore Information
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Explore available information such as authors,
                languages, publication years, and book covers.
              </p>
            </div>


            <div className="rounded-2xl border bg-background p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <Library className="h-9 w-9 text-primary" />

              <h3 className="mt-6 text-xl font-semibold">
                Book Details
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Open a dedicated page for each book and view
                its available details in one place.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Technology */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Built with modern technologies
          </h2>
        </div>


        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-4 rounded-xl border p-5">
            <Code2 className="h-7 w-7 text-primary" />

            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">
                React framework
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 rounded-xl border p-5">
            <Code2 className="h-7 w-7 text-primary" />

            <div>
              <p className="font-semibold">React</p>
              <p className="text-sm text-muted-foreground">
                UI library
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 rounded-xl border p-5">
            <Code2 className="h-7 w-7 text-primary" />

            <div>
              <p className="font-semibold">Tailwind CSS</p>
              <p className="text-sm text-muted-foreground">
                Styling
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4 rounded-xl border p-5">
            <Database className="h-7 w-7 text-primary" />

            <div>
              <p className="font-semibold">Open Library API</p>
              <p className="text-sm text-muted-foreground">
                Book data
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="border-t bg-primary text-primary-foreground">

        <div className="mx-auto max-w-4xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to discover your next book?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Explore BookHub and find something new to read.
          </p>

          <Link
            href="/book"
            className="mt-7 inline-flex rounded-xl bg-background px-7 py-3 font-semibold text-foreground transition hover:opacity-90"
          >
            Browse Books
          </Link>

        </div>

      </section>

    </main>
  );
}

