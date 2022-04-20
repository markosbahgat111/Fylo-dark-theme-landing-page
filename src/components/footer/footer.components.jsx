import Image from "next/image";
import logo from 'assets/images/logo.svg';
import Link from "next/link";
import locationIcon from 'assets/images/icon-location.svg';
import mailIcon from 'assets/images/icon-email.svg';
import phoneIcon from 'assets/images/icon-phone.svg';

const Footer = () => {
    return (
        <div className="mt-60 w-full relative">
            <div className="lg:w-1/2 w-11/12 absolute h-fit sm:h-[250px] bg-[#1c2431] shadow-xl left-[50%] translate-x-[-50%] top-[-125px] rounded-lg text-center flex flex-col justify-around items-center p-5">
                <h1 className="font-bold text-4xl">Get early access today</h1>
                <p className="font-openSans text-sm sm:w-10/12 w-full text-gray-400 sm:py-0 py-5">It only takes a minute to sign up and our free starter tier is extremely generous. if you have any question our support team would be happy to help you.</p>
                <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-5">
                    <input placeholder="email@example.com" className="sm:w-[60%] w-full h-10 sm:h-12 rounded-full pl-5 text-black outline-none"/>
                    <button className="bg-black h-10 sm:h-12 px-8 text-sm rounded-full bg-gradient-to-r from-[#65e2d9] to-[#339ecc] w-full sm:w-fit">Get Started For Free</button>
                </div>
            </div>
            <div className="w-full flex flex-col min-h-[60vh] bg-[#0b1523] pt-64 pb-10 sm:pt-52 lg:px-20 px-10 gap-10">
                <div className="relative w-40 h-14"><Image src={logo} alt="logoFooter" layout="fill" className="object-contain"/></div>
                <div className="flex lg:flex-row flex-col xl:gap-28 gap-10">
                    <div className="lg:w-1/2 w-full flex md:flex-row flex-col md:gap-0 gap-5">
                        <div className="flex flex-row items-start gap-3">
                            <div className="relative w-6 h-5"><Image src={locationIcon} alt="location icon" layout="fill"/></div>
                            <p className="sm:w-3/4 w-auto">traditional knowledge or belief tribal lore. b : knowledge gained through study or experience the lore of religious architecture.</p>
                        </div>
                        <div className="flex flex-col items-start gap-5">
                            <div className="flex flex-row items-center gap-3">
                                <div className="relative w-5 h-5"><Image src={phoneIcon} alt="phone icon" layout="fill"/></div>
                                <p>+201208444364</p>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div className="relative w-5 h-5"><Image src={mailIcon} alt="mail icon" layout="fill"/></div>
                                <p>markos.bahgat@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-20 gap-10 ">
                        <div className="flex flex-col items-left gap-3">
                            <Link href="http://markosbahgat.com"><a>About Us</a></Link>
                            <Link href="http://markosbahgat.com"><a>Careers</a></Link>
                            <Link href="http://markosbahgat.com"><a>Press</a></Link>
                            <Link href="http://markosbahgat.com"><a>Blog</a></Link>
                        </div>
                        <div className="flex flex-col items-left gap-3">
                            <Link href="http://markosbahgat.com"><a>Contact Us</a></Link>
                            <Link href="http://markosbahgat.com"><a>Terms</a></Link>
                            <Link href="http://markosbahgat.com"><a>Privacy</a></Link>
                        </div>
                    </div>
                    <div className="flex flex-row lg:items-start justify-center md:justify-start items-center gap-5 md:w-auto w-full">
                        <i className="fa-brands fa-facebook-f text-center p-3 px-4 border-2 rounded-full"></i>
                        <i className="fa-brands fa-instagram text-center p-3 border-2 rounded-full"></i>
                        <i className="fa-brands fa-twitter text-center p-3 border-2 rounded-full"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
