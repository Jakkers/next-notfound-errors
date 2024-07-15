import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav>
        <Link href="/errorPage">Error Page</Link> |{" "}
        <Link href={"/posts/10"}>Not Found Page</Link> |{" "}
        <Link href={"/fghfds"}>Global Not Found Page</Link>
      </nav>
    </div>
  );
}
