import Image from "next/image";
import accessIcon from 'assets/images/icon-access-anywhere.svg';
import secureIcon from 'assets/images/icon-security.svg';
import collaIcon from 'assets/images/icon-collaboration.svg';
import storeIcon from 'assets/images/icon-any-file.svg';

const SectionTwo = () =>
{
    const SectionClasses_div = "sm:w-3/4 w-11/12  m-auto text-center";
    const SectionClasses_img = "relative w-14 h-12 m-auto";
    const SectionClasses_header = "font-bold text-xl mt-6 mb-2";
    const SectionClasses_p = "text-1sm  text-gray-400 m-auto font-openSans";
    return (
        <div className="sm:w-9/12 w-full grid grid-rows-auto gap-40 m-auto mt-40" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            <div className={SectionClasses_div}>
                <div className={SectionClasses_img}><Image src={accessIcon} alt="accessIcon" layout="fill" className="object-contain"/></div>
                <h2 className={SectionClasses_header}>Access your files, anywhere</h2>
                <p className={SectionClasses_p}>The ability to use a smartPhone, tablet or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className={SectionClasses_div}>
                <div className={SectionClasses_img}><Image src={secureIcon} alt="secureIcon" layout="fill" className="object-contain"/></div>
                <h2 className={SectionClasses_header}>Security you can trust</h2>
                <p className={SectionClasses_p}>2-factor authentication and user controlled encryption are just a couple of the Security features we allow to help secure your files.</p>
            </div>
            <div className={SectionClasses_div}>
                <div className={SectionClasses_img}><Image src={collaIcon} alt="collaIcon" layout="fill" className="object-contain"/></div>
                <h2 className={SectionClasses_header}>Real-time collaboration</h2>
                <p className={SectionClasses_p}>Securely share files and folders with friends, family and colleagues for live collaboration, no email attachments required.</p>
            </div>
            <div className={SectionClasses_div}>
                <div className={SectionClasses_img}><Image src={storeIcon} alt="storeIcon" layout="fill" className="object-contain"/></div>
                <h2 className={SectionClasses_header}>Store any type of files</h2>
                <p className={SectionClasses_p}>Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </div>
        </div>
    );
}

export default SectionTwo;
