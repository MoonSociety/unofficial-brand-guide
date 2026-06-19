import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <p className="font-display text-6xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold">Lost in space</h1>
      <p className="mt-2 text-muted-foreground max-w-md">
        That page isn&apos;t part of the Moon Society brand guide. Let&apos;s get you back to solid ground.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to Overview</Link>
      </Button>
    </div>
  );
}
