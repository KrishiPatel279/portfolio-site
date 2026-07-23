"use client";

const links = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container flex items-center justify-between h-20">
        <h1 className="font-bold text-xl">
          Krishi Patel
        </h1>

        <ul className="hidden md:flex gap-10">
          {links.map((item)=>(
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}