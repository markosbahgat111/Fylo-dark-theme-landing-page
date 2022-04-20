import Image from 'next/image';
import logo from 'assets/images/logo.svg';
import Link from 'next/link';

const Navbar = () =>
{
    return (
        <div className='w-screen h-[100px] md:h-[150px] flex flex-row items-center justify-between md:px-20 px-5'>
            <div className="relative w-20 h-[30%] md:w-48 md:h-[40%] "><Image src={logo} layout="fill" alt='logo' className="object-contain"/></div>
            <div className='md:w-1/5 w-auto flex justify-around md:gap-[20px] gap-3 whitespace-nowrap'>
                <Link href="http://markosbahgat.com"><a target="_blank" className='font-[400] text-gray-300 hover:text-white'>Features</a></Link>
                <Link href="http://markosbahgat.com"><a target="_blank" className='font-[400] text-gray-300 hover:text-white'>Team</a></Link>
                <Link href="http://markosbahgat.com"><a target="_blank" className='font-[400] text-gray-300 hover:text-white'>Sign in</a></Link>
            </div>
        </div>
    );
}

export default Navbar;
