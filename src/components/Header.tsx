import { FaStream } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import Form from "./Form";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between p-4 items-center bg-gradient-to-tr from-amber-700 to-amber-950">
      <div className="flex justify-center items-center">
        <div className="mr-4 md:hidden">
          <FaStream />
        </div>
        <Link href="/" className="text-2xl font-bold">
          Koala
        </Link>
      </div>

      <ul className="hidden md:flex justify-center items-center">
        <li className="list-none mx-2">Home</li>
        <li className="list-none mx-2">TV Shows</li>
        <li className="list-none mx-2">Movies</li>
        <li className="list-none mx-2">Latest</li>
      </ul>

      <div className="flex items-center justify-center">
        <div className="mx-2 ">
          <Form />
        </div>
        <Link href={'login'} className="mx-2 text-xl">
            <LuUser/>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
