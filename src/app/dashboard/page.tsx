import Link from 'next/link';

export default function Dashboard() {
    return(
        <div
        className='max-w-4xl mx-auto mt-5'>
            <header>
            <h1 
          className="font-heading text-4xl font-black text-brand-dark tracking-tight">
          Dashboard
            </h1>
            <hr className="border-t-4 border-brand-light-pink mt-2 opacity-100" />
            <p className="font-body text-brand-dark font-semibold mt-1 opacity-90">
            This is where your favorite designs are saved! Browse to find one you like, or use the search bar above.            </p>
            </header>

        </div>

    );
}