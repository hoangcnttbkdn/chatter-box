import * as commentFrame1 from '../../assets/images/page/comment 1.png';
import * as commentFrame2 from '../../assets/images/page/comment 2.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';
import * as logo from '../../assets/images/page/logo.png';
import FeatureCard from '../common/FeatureCard';
import Title from '../ui/title';

interface InfoItem {
    label: string;
    value: string;
}

function Tokenomic() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const purposes: {
        title: string;
        content: string;
    }[] = [
        {
            title: `Access to Premium AMA Sessions`,
            content: `Tokens unlock exclusive, high-profile 
AMA sessions`,
        },
        {
            title: `Staking Rewards`,
            content: `Token holders can stake 
tokens to earn rewards for participation`,
        },
        {
            title: `Governance Rights`,
            content: `Token holders 
can stake tokens to earn rewards for 
participation`,
        },
        {
            title: `Payment for Services`,
            content: `AMA hosts 
can use tokens for custom Chatter 
Box features`,
        },
        {
            title: `Revenue share`,
            content: `Token holders can share in 
Chatter Box's revenue`,
        },
    ];

    const infoList: InfoItem[] = [
        { label: 'Supply', value: '100M' },
        { label: 'Name', value: 'Chatter Box' },
        { label: 'Ticket', value: 'CHAT' },
        { label: 'LP', value: 'Locked' },
        { label: 'Contract', value: 'Renounced' },
    ];

    return (
        <>
            <div className="absolute  z-0 top-[-50px] left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
                <img src="ball@3x-8.png" className="rotating-image block" />

                <div className="w-screen"></div>
            </div>

            <div className="md:mt-32 flex flex-col bg-black rounded-xl relative">
                <div className='absolute w-full h-full bg-black '>

                </div>
                <div className='relative h-[90px] md:h-[120px] -translate-y-[60px] -md:-translate-y-[100px]'>
                    <Title title="Tokenomics and Utility - $CHAT"></Title>
                    <div
                        className="tn-atom h-[70px] md:h-[110px] absolute bottom-0 left-0 w-full"
                        style={{
                            transformOrigin: 'center center',
                        }}
                    ></div>
                </div>

                <div className="bg-black relative z-10 max-w-6xl mx-auto px-10 md:px-4 sm:grid grid-cols-2 md:grid-cols-3 items-center gap-8">
                    <div data-aos="fade-up-right" className="relative ">
                        <img
                            src={commentFrame1.default}
                            className="object-contain"
                        />
                        <div className="absolute w-full top-1/3 pt-4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                            <div className="text-red md:text-xl font-bold">
                                Token Distrubution
                            </div>
                            <div className="flex flex-col items-center">
                                {infoList.map((item, index) => (
                                    <span key={index} className="text-md">
                                        {item.label}: <b>{item.value}</b>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <img
                        data-aos="fade-up"
                        src={logo.default}
                        className="object-contain hidden md:block"
                    />
                    <div
                        data-aos="fade-up-left"
                        className="relative px-10 md:px-0"
                    >
                        <img
                            src={commentFrame2.default}
                            className="object-contain"
                        />
                        <div className="absolute w-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2">
                            <div className="text-red font-bold md:text-xl">
                                Tax Structure
                            </div>
                            <span className="text-3xl md:text-5xl font-bold">
                                5/5
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="fade-up-right"
                    className="relative flex flex-col gap-4 md:gap-10 bg-black"
                >
                    <div className="relative z-10">
                        <div className=" flex items-center justify-center w-full">
                            <img
                                data-aos="flip-right"
                                data-aos-duration="2000"
                                src="/statisc.png"
                                className="w-3/5 m-auto z-20"
                            />
                        </div>
                    </div>
                    <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-4 md:gap-10 bg-black px-10">
                        <div className="text-orange text-xl md:text-2xl flex items-end justify-start">
                            The native token ($CHAT) on our platform will serve
                            several purposes:
                        </div>
                        {purposes?.map((purpose, index) => {
                            return (
                                <div
                                    data-aos={
                                        index % 2 ? 'flip-left' : 'flip-right'
                                    }
                                    key={'purpose_' + index}
                                >
                                    <FeatureCard
                                        data-aos="fade-up"
                                        title={purpose.title}
                                        content={purpose.content}
                                    ></FeatureCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tokenomic;
