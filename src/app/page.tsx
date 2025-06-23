import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="font-semibold">Artistly</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/artists">
            Artists
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/onboarding">
            For Artists
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Find and Book Your Next Performing Artist
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Artistly is the easiest way to discover and book talented artists for your events.
              </p>
              <Button>Explore Artists</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Singers</CardTitle>
                  <CardDescription>Vocal artists for any genre.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>View Singers</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dancers</CardTitle>
                  <CardDescription>From classical to contemporary.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>View Dancers</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Speakers</CardTitle>
                  <CardDescription>Inspiring talks and presentations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>View Speakers</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>DJs</CardTitle>
                  <CardDescription>Get the party started.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>View DJs</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Artistly. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}