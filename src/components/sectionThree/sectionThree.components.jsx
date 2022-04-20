import Image from "next/image";
import Link from "next/link";
import productivity from 'assets/images/illustration-stay-productive.png';
import arrow from 'assets/images/icon-arrow.svg';

const SectionThree = () => {
    return (
        <div className="w-11/12 flex lg:flex-row flex-col items-center lg:text-left md:text-center text-left justify-center gap-20 mt-40 mx-auto">
            <div className="relative w-[90vw] h-[50vh] lg:w-[40vw] lg:h-[50vh] "><Image src={productivity} alt="productivity" layout="fill" className="object-contain"/></div>
            <div className="lg:w-[45%] w-11/12 lg:pr-40 flex flex-col lg:items-start items-start md:items-center gap-6">
                <h1 className="font-bold text-4xl">Stay Productive,<br className="hidden lg:visible"/> wherever you are</h1>
                <p className="text-gray-300 font-openSans">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="text-gray-300 font-openSans">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <Link href="http://markosbahgat.com"><a className="inline-flex w-fit items-center  gap-2 text-[#65e2d9] border-b-2 border-[#65e2d9]">See how Fylo works <Image src={arrow} alt="arrow" width={16} height={16} /></a></Link>
            </div>
        </div>
    );
}

export default SectionThree;
