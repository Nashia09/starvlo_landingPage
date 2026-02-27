import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-primary text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold font-primary text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 font-secondary mb-8">
          We couldn&apos;t find the page you were looking for.
        </p>
        <Link 
          href="/"
          className="button-text bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
} 