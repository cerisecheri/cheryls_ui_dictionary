import Link from 'next/link';

export default function Sidebar(){
return(
    <aside 
    className='w-40 self-stretch bg-[#FFF099] 
     rounded-r-lg p-10 flex flex-col items-center gap-10
     shadow-[4px_4px_4px_0px_#00000040]'>
        <div> 
        <img 
            src="/pfp2.png" 
            alt=""
            width={65}  /* adjust pixel size here */
            height={65} />
        </div>
    <nav 
    className='flex flex-col gap-15 w-full text-center'>
        
        <div
        className='flex flex-col items-center'>
            <img 
            src="/home.png" 
            alt=""
            width={50}  /* adjust pixel size here */
            height={50} />
        <Link 
        href="/"
        className='font-heading font-bold text-[#CD838E] py-2 
        hover:text-[#FFD3D4] rounded-lg transition-colors'>
        Home
        </Link>
        </div>

        <div
        className='flex flex-col items-center'>
            <img 
            src="/dashboard.png" 
            alt=""
            width={50}  /* adjust pixel size here */
            height={50} />
        <Link
        href="/dashboard"
        className="font-heading font-bold text-[#CD838E] py-2 
        hover:text-[#FFD3D4] rounded-lg transition-colors">
        Dashboard
        </Link>
        </div>

        <div
        className='flex flex-col items-center'>
            <img 
            src="/dictionary.png" 
            alt=""
            width={50}  /* adjust pixel size here */
            height={50} />
        <Link
        href="/dictionary"
        className="font-heading font-bold text-[#CD838E] py-2 
        hover:text-[#FFD3D4] rounded-lg transition-colors">
        Dictionary
        </Link>
        </div>

    </nav>

    </aside>

);
}