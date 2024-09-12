import Title from '../ui/title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="my-4 md:mb-24">
            <img
                src="/red ligh left.svg"
                alt="Background"
                className="absolute  w-1/3  object-contain bottom-[10%] left-[5%]"
            />
            <img
                src="/red light right.svg"
                alt="Background"
                className="absolute  w-1/3  object-contain -top-[10%] right-[5%] z-10 "
            />
            <div className="max-w-6xl px-4 md:px-8 relative h-full flex flex-col gap-4 justify-center items-center text-center text-base">
                <Title title="About"></Title>
                <div data-aos="zoom-in-down" className="leading-8 text-base md:text-xl w-full md:w-3/4">
                    Chatter Box - revolutionizing AMAs (Ask Me Anything
                    sessions) by introducing voice-based real-time interactions
                    and Al capabilities. It will use Chatter box's Al technology
                    to create a virtual "twin" of developers that can handle
                    complex interactions, provide real-time responses in
                    multiple languages, and automate moderation. This addresses
                    limitations of current text-based AMAs on platforms like
                    Telegram, enhancing engagement and scalability.
                </div>
            </div>
        </div>
    );
}

export default About;
