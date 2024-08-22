// In addition to catching expected notFound() errors,
// the root app/not-found.js file also handles any unmatched URLs the whole application.

const NotFound = () => {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>We could not find the requested page</p>
    </main>
  );
};

export default NotFound;
