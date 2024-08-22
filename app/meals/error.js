"use client";
// error.js must be client component
const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Failed to fetch meals</p>
    </main>
  );
};

export default Error;
