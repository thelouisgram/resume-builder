"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const user = { name: "John Doe" }; 

    const logoutUser = () => {
        router.push("/");
    }

  return (
    <div className="shadow bg-white">
      <nav
        className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5
      text-slate-800 transition-all"
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-4 text-sm">
            <p className="max-sm:hidden">Hi, {user?.name}</p>
            <button onClick={logoutUser} className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5
            rounded-full active:scale-95 transitions-all">
                Logout
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
