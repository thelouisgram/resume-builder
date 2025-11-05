"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const logos = [
        'https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/framer.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg',
    ]

  return (
    <>
            <div className="pb-20">
                {/* Navbar */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <Link href="/">
                        <Image 
                            src="./assets/logo.svg" 
                            alt="Logo" 
                            width={120}
                            height={40}
                            className="object-contain cursor-pointer"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <Link href="/" className="hover:text-green-600 transition">Home</Link>
                        <Link href="#features" className="hover:text-green-600 transition">Features</Link>
                        <Link href="#testimonials" className="hover:text-green-600 transition">Testimonials</Link>
                        <Link href="#cta" className="hover:text-green-600 transition">Contact</Link>
                    </div>

                    <div className="flex gap-2">
                        <Link href="/app?state=register" className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white">
                            Get started
                        </Link>
                        <Link href="/app?state=login" className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900">
                            Login
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu">
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="#features" className="text-white">Features</Link>
                    <Link href="#testimonials" className="text-white">Testimonials</Link>
                    <Link href="#cta" className="text-white">Contact</Link>
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex">
                        X
                    </button>
                </div>

                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

                    {/* Avatars + Stars */}
                    <div className="flex items-center mt-24">
                        <div className="flex -space-x-3 pr-3">
                            <Image 
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" 
                                alt="user3" 
                                width={32}
                                height={32}
                                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]" 
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" 
                                alt="user1" 
                                width={32}
                                height={32}
                                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2" 
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" 
                                alt="user2" 
                                width={32}
                                height={32}
                                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]" 
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" 
                                alt="user3" 
                                width={32}
                                height={32}
                                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]" 
                            />
                            <Image 
                                src="https://randomuser.me/api/portraits/men/75.jpg" 
                                alt="user5" 
                                width={32}
                                height={32}
                                className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]" 
                            />
                        </div>

                        <div>
                            <div className="flex ">
                                {Array(5).fill(0).map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-green-600" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">
                                Used by 10,000+ users
                            </p>
                        </div>
                    </div>

                    {/* Headline + CTA */}
                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
                        Land your dream job with <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">AI-Powered </span>resumes.
                    </h1>

                    <p className="max-w-md text-center text-base my-7">Create, edit and download professional resumes with AI-powered assistance.</p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4 ">
                        <Link href='/app' className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                            <span>Try demo</span>
                        </button>
                    </div>

                    <p className="py-6 text-slate-600 mt-14">Trusted by leading brands, including</p>

                    <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" id="logo-container">
                        {logos.map((logo, index) => (
                            <Image 
                                key={index} 
                                src={logo} 
                                alt={`Company logo ${index + 1}`} 
                                width={100}
                                height={24}
                                className="h-6 w-auto max-w-xs" 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
  )
}

export default Hero