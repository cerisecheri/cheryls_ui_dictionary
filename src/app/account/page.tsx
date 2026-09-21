import Link from 'next/link';

export default function CreateAccount() {
    return(
        <div className="max-w-4xl mx-auto mt-5">
        <header>
          <h1 
          className="font-heading text-4xl font-black text-brand-dark tracking-tight">
          Create Account
          </h1>
          <hr className="border-t-4 border-brand-light-pink mt-4 opacity-100" />
          <p className="font-body text-brand-dark font-semibold mt-1 opacity-90">
          Access your favorite UI tools anytime, anywhere.
        </p>
        </header>

        {/* Form Container */}
        
        <div
        className='flex justify-center mt-12'>
        <form className='w-full max-w-md bg-brand-dark rounded-3xl
        p-8 border-4 border-brand-dark shadow-[4px_4px_4px_0px_#00000040] flex flex-col gap-6'>

         {/* Email */}
         <div>
            <label className='font-heading text-brand-pink font-black text-lg'>Email</label>
         <input
            type="email"
            placeholder="jane_doe@gmail.com"
            className="font-body block w-full rounded-md bg-brand-yellow px-3 py-1.5 
             placeholder:text-brand-pink  sm:text-sm/6"
           />
         </div>
         
         {/* Password */}
         <div>
            <label className='font-heading text-brand-pink font-black text-lg'>Password</label>
         <input
            type="password"
            placeholder="passw0rd"
            className="font-body block w-full rounded-md bg-brand-yellow px-3 py-1.5 
             placeholder:text-brand-pink  sm:text-sm/6"
           />
         </div>

         {/* Confirm Password */}
         <div>
            <label className='font-heading text-brand-pink font-black text-lg'>Confirm Password</label>
         <input
            type="password"
            placeholder="passw0rd"
            className="font-body block w-full rounded-md bg-brand-yellow px-3 py-1.5 
             placeholder:text-brand-pink  sm:text-sm/6"
           />
         </div>

         {/* Get Started Button */} 
            
            <button
            type= "sumbit"
            className='font-heading w-full h-11.5 bg-brand-pink text-brand-dark font-black
            rounded-xl border-4 border-brand-dark 
            transition duration-200 cursor-pointer active:scale-80 transition-all'>
             Create Account
            </button>
         
        </form>
        </div>
        











        </div>
  
    );
}