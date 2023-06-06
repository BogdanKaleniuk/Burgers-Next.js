import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <Link href="/">Головна</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/reviews">Відгуки</Link>
        <Link href="/burgers">Бургери</Link>
      </nav>
    </header>
  );
};

export default Header;
