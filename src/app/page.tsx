import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <header
      className="">
        <h1 
        className="font-heading text-4xl font-black text-brand-dark tracking-tight">
        Home
        </h1>
        <hr className="border-t-4 border-brand-light-pink mt-2 opacity-100" />
      </header>


{/* 2. Main Content Split Layout */}
<div className="flex flex-col md:flex-row gap-12 items-start mt-12">




{/* Left Side: The Image Box */}
    <div className="w-full md:w-[320px] aspect-square bg-brand-dark 
    rounded-3xl border-4 border-brand-dark shadow-[4px_4px_4px_0px_#00000040] flex items-center justify-center">
    <span className="text-brand-yellow font-black text-2xl tracking-wider">
            image
          </span>
    
    </div>

{/* Right Side: The Text & Sign Up CTA */}

    
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="font-heading text-4xl font-black text-brand-dark tracking-tigh"> 
          About this page 
        </h2>

        <div className="font-body text-brand-dark font-semibold leading-relaxed space-y-4">
            <p>
              Welcome to Cheryl's UI Dictionary! This is a showcase made by a
              developer for developers.
            </p>
            <p>
              The dictionary will walk you through different pieces of code and their
              previews. You can then save your favorites to your personal
              dashboard and use them later!
            </p>
            <p className="text-brand-dark mt-4">
              Click to sign up or continue with your login info!
            </p>
          </div>

          {/* "Sign up" Button */}

    <div className="pt-4 flex justify-center">
      <Link
      href="/account"
      className="font-heading inline-block bg-brand-yellow text-brand-dark font-black text-xl px-8 py-3 rounded-xl  
      shadow-[4px_4px_4px_0px_#00000040]
      transition duration-200 cursor-pointer active:scale-80 transition-all">
      Sign Up!
      </Link>
    </div>

    <div className="font-body text-brand-dark font-semibold leading-relaxed mt-4">
      <p>
        Already have an account?{' '}
        <Link
      href="/signup"
      className="text-brand-yellow font-black tracking-wider">
      Login.
      </Link>
      </p>
      
    </div>


        </div>
      </div>
    </div>

  );
}
