import Link from "next/link";

export default function SideBar() {
  return (
    <div className="leftbar">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/search"}>Search</Link>
        </li>
        <li>
          <Link href={"/#frequent-section"}>les plus frequents</Link>
        </li>
      </ul>
    </div>
  );
}
