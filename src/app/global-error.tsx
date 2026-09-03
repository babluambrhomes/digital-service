"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center min-h-screen kraft-bg">
          <p className="font-caveat text-7xl font-bold text-destructive">!</p>
          <h1 className="mt-4 font-caveat text-3xl font-bold tracking-tight">
            Something went wrong
          </h1>
          <p className="mt-4 font-kalam text-muted-foreground max-w-md">
            An unexpected error occurred. Please try again or contact us if the
            problem persists.
          </p>
          <div className="mt-8 flex gap-4">
            <Button onClick={() => reset()} variant="outline">
              Try Again
            </Button>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
