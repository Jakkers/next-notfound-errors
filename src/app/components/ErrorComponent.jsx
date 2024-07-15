function ErrorComponent() {
  throw new Error("I deliberately broke this page, because I'm a nad person");
  return (
    <div>
      <h1>Page content</h1>
    </div>
  );
}
