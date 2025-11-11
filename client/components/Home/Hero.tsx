"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  return (
    <div className="pb-20">
      <nav className="z-50 flex items-center justify-between w-full py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 text-sm">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-slate-800">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="#features" className="hover:text-green-600 transition">
            Features
          </Link>
          <Link href="#testimonials" className="hover:text-green-600 transition">
            Testimonials
          </Link>
          <Link href="#cta" className="hover:text-green-600 transition">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex gap-3">
          <Link
            href="/app?state=register"
            className="px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white"
          >
            Get started
          </Link>
          <Link
            href="/app?state=login"
            className="px-6 py-2 border hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition text-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" className="text-white" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          href="#features"
          className="text-white"
          onClick={() => setMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="text-white"
          onClick={() => setMenuOpen(false)}
        >
          Testimonials
        </Link>
        <Link href="#cta" className="text-white" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <div className="flex flex-col gap-3">
          <Link
            href="/app?state=register"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full text-white text-base"
          >
            Get started
          </Link>
          <Link
            href="/app?state=login"
            className="px-6 py-2 bg-white text-green-600 hover:bg-slate-100 rounded-full text-base"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition"
        >
          ✕
        </button>
      </div>

      <section className="relative flex flex-col items-center justify-center text-sm px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 text-black text-center mt-20 sm:mt-28">
        <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-[32rem] bg-green-300 blur-[100px] opacity-30"></div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
              "https://randomuser.me/api/portraits/men/75.jpg",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`user${i}`}
                width={32}
                height={32}
                className="size-8 sm:size-10 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition"
              />
            ))}
          </div>

          <div>
            <div className="flex justify-center sm:justify-start">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-transparent fill-green-600"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                ))}
            </div>
            <p className="text-sm text-gray-700">Used by 10,000+ users</p>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold max-w-4xl mx-auto mt-6 md:leading-[70px]">
          Land your dream job with{" "}
          <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          resumes.
        </h1>

        <p className="max-w-md mx-auto text-base sm:text-lg my-6 text-slate-700">
          Create, edit and download professional resumes with AI-powered
          assistance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/app"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 py-3 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center justify-center transition"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>

          <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 py-3 text-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="lucide lucide-video"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
            <span>Try demo</span>
          </button>
        </div>

        <p className="py-6 text-slate-600 mt-14">Trusted by leading brands</p>
        <div className="flex flex-wrap justify-center sm:justify-between gap-6 max-w-3xl mx-auto py-4">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Company logo ${i + 1}`}
              width={100}
              height={24}
              className="h-6 w-auto opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
