import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div>
      <h2>Global Not Found</h2>
      <p>Could not find requested page</p>
      <Link href={"/"}>Return to homepage</Link>
    </div>
  );
}
