import Link from "next/link";

function Nav() {
  return (
    <div>
      <Link href="/">
        <a className="home">Home</a>
      </Link>
      <Link href="/about">
        <a className="home">About</a>
      </Link>
    </div>
  );
}

export default Nav;
