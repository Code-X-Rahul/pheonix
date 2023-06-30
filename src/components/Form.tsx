"use client";
import { FormEvent, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const inputHandler = (e: FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    console.log("inputHandler");
    router.push(`search/${query}`);
  };

  return (
    <form
      onSubmit={inputHandler}
      className="relative flex items-center justify-center"
    >
      <input
        ref={inputRef}
        placeholder="Search Here..."
        type="text"
        className="h-8 bg-transparent border-b-zinc-500 border-b-2 max-w-[12rem] outline-none px-2 text-white text-sm focus:border-teal"
      />
      <button type="submit" className="absolute right-2 text-slate-100">
        <FaSearch />
      </button>
    </form>
  );
};

export default Form;
