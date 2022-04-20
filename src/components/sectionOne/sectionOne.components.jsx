import Image from "next/image";
import pattern from 'assets/images/illustration-intro.png';
const SectionOne = () => {
    return (
        <div className="lg:w-1/2 w-11/12 m-auto text-center">
            <div className="relative w-full h-[60vh] m-auto"><Image src={pattern} layout="fill" alt="pattern" /></div>
            <h1 className="font-bold md:text-5xl text-2xl mt-5">All your files in one secure location, accessible anywhere.</h1>
            <p className="md:text-xl md:w-9/12 w-full my-10 mx-auto text-gray-400 font-openSans">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className="bg-gradient-to-r from-[#65e2d9] to-[#339ecc] px-20 py-3 rounded-full">
                Get Started
            </button>
        </div>
    );
}

export default SectionOne;
