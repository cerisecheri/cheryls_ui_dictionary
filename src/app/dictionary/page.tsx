import Link from 'next/link';
import { topics } from '@/data/topics';

export default function Dictionary() {
    return(
<div
className='max-w-4xl mx-auto mt-5'>
    <header>
        <h1 
          className="font-heading text-4xl font-black text-brand-dark tracking-tight">
          UI Dictionary
        </h1>
        <hr className="border-t-4 border-brand-light-pink mt-2 opacity-100" />
        <p className="font-body text-brand-dark font-semibold mt-1 opacity-90">
          Browse through unique CSS features and save as you go!
        </p>
    </header>

 {/* This grid layout */}

    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
      {topics.map((topic) => (
        <Link
        key={topic.slug}
        href={`/dictionary/${topic.slug}`}
        className='bg-brand-dark rounded-2xl p-6 border-4 border-brand-dark shadow-[4px_4px_4px_0px_#00000040]
                       flex items-center justify-center text-center
                       transition-all active:scale-90'
        >
          <span className='font-heading text-brand-yellow font-black text-lg'>
            {topic.title}
          </span>


        </Link>

      ))}

    </div>


</div>
    );
}