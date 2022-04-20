import Image from "next/image";
import person1 from 'assets/images/profile-1.jpg';
import person2 from 'assets/images/profile-2.jpg';
import person3 from 'assets/images/profile-3.jpg';
import quote from 'assets/images/bg-quotes.png';

const Testimonial = () =>
{
    const classes = {
        container: "bg-[#202a3c] p-10 rounded-sm z-[2] mx-2",
        p: "pb-8 font-openSans text-justify",
        img_container:"relative w-10 h-10 rounded-full overflow-hidden flex flex-row items-center justify-center",
        identity_container:"flex flex-row items-center gap-5",
        span: "text-sm text-gray-400",
        h3:"font-bold font-openSans tracking-wider"
    }

    return (
        <div className="sm:w-10/12 w-11/12 grid items-center justify-center gap-10 m-auto mt-40 relative" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            <div className="absolute w-12 h-12 z-[0] top-[-40px]">
                <Image src={quote} alt="quote" layout="fill"/>
            </div>
            <div className={classes.container}>
                <p className={classes.p}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className={classes.identity_container}>
                    <div className={classes.img_container}><Image src={person1} layout="fill" alt="person1" className="object-contain"/></div>
                    <div>
                        <h3 className={classes.h3}>Satish Patel</h3>
                        <span className={classes.span}>Founder & CEO.Muddle</span>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <p className={classes.p}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className={classes.identity_container}>
                    <div className={classes.img_container}><Image src={person2} layout="fill" alt="person2" className="object-contain"/></div>
                    <div>
                        <h3 className={classes.h3}>Bruce Mckenzile</h3>
                        <span className={classes.span}>Founder & CEO.Muddle</span>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <p className={classes.p}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className={classes.identity_container}>
                    <div className={classes.img_container}><Image src={person3} layout="fill" alt="person3" className="object-contain"/></div>
                    <div>
                        <h3 className={classes.h3}>Lva Boyd</h3>
                        <span className={classes.span}>Founder & CEO.Huddle</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
