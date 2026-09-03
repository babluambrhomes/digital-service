import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center kraft-bg">
      <p className="font-caveat text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-caveat text-3xl font-bold tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-4 font-kalam text-muted-foreground max-w-md">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
        moved or doesn&apos;t exist.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
