"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-champagne-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-stone-900 mb-4">Something went wrong!</h1>
        <p className="text-stone-600 mb-8">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-stone-900 text-champagne-50 px-8 py-4 rounded-lg font-semibold hover:bg-stone-800 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

