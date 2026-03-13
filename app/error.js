'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-lg"
        >
          Try again
        </button>
      </div>
    </div>
  );
}