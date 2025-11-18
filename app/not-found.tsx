export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-slate-50">
      <h1 className="text-5xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-slate-600 mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/dashboard/overview"
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700"
      >
        Back to Dashboard
      </a>
    </div>
  );
}
