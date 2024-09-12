import * as radialSm from '../../assets/images/radial-red-sm.png';
import * as radial from '../../assets/images/radial-red.png';
import * as markIcon from '../../assets/images/mark-icon.png';
import * as message from '../../assets/images/message.svg';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';


function KeyFeature() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, [])
      
    interface Feature {
        title: string;
        content: string;
    }

    const features: Feature[] = [
        {
            title: 'Natural Language: Processing (NLP) and Voice AI',
            content: `Enables the chatbot to provide fluid, human-like 
voice responses, enhancing user experience`,
        },
        {
            title: 'Tokenized Ecosystem',
            content: `Features a native token ($CHAT) for staking, 
governance, and accessing premium AMA sessions`,
        },
        {
            title: 'Easy to Integrate and Use',
            content: `Seamlessly integrates into Telegram, with plans for 
other platforms like X`,
        },
        {
            title: ' Multilingual Support',
            content: `Multilingual support makes AMAs inclusive and 
accessible to a global audience`,
        },
        {
            title: 'Real-Time AMA Moderation',
            content: `Autonomously manages AMA sessions by moderating 
questions and providing instant responses`,
        },

        {
            title: 'Automated AMA Sessions',
            content: `24/7 sessions in multiple languages`,
        },

        {
            title: 'Customizable Personalities',
            content: `Choose your selected character or create your own 
unique avatar personality based on your brand`,
        },
    ];

    return (
        <>
            <div className="absolute top-0 w-1/3 -translate-y-1/4 left-0">
                <img src={radial.default} alt="" className="" />
            </div>

            <img
                src={radialSm.default}
                alt=""
                className=" absolute bottom-0 right-0 w-1/5"
            />
            <div className="relative bg-black border-black  lg:max-w-6xl rounded-xl border p-4 md:p-8 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <img
                    src={message.default}
                    alt=""
                    className="moving-left-right absolute -bottom-12 right-0 w-1/4"
                />
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg shadow-md"
                        data-aos="fade-up"
                    >
                        <h3 className="text-base font-bold mb-2">
                            {feature.title}
                        </h3>
                        <div className="flex gap-2">
                            <img
                                src={markIcon.default}
                                alt=""
                                className="w-5"
                            />
                            <p className="font-light text-base text-gray-300">
                                {feature.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default KeyFeature;
