import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex justify-between items-center flex-wrap gap-8">
        <p className="text-gray-400">© 2026 Krishi Patel</p>

        <div className="flex gap-6">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="#"
            aria-label="Email"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}