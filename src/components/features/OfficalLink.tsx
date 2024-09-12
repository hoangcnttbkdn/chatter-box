import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';

function OfficalLink() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const socials: {
        name: string;
        url: string;
        img: string;
    }[] = [
        {
            name: 'Website',
            url: '########',
            img: '/web.svg',
        },
        {
            name: 'Telegram',
            url: '########',
            img: '/telegram.svg',
        },
        {
            name: 'Twitter',
            url: '@AI_ChatterBOX',
            img: '/X.svg',
        },
        {
            name: 'Etherscan',
            url: '########',
            img: '/etherscan.png',
        },
    ];
    return (
        <div className="flex flex-col gap-10 items-center ">
            <div className="scrolling-text-wrapper h-fit min-h-[60px] overflow-hidden">
                {/* Left to Right Scroll */}
                <div className="scrolling-text left-to-right">
                    <div className="flex gap-6">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-xl md:text-5xl opacity-20"
                            >
                                <span>Chatter</span>
                                <span className="text-red">Box</span>
                            </div>
                        ))}
                        {/* Duplicate the items for continuous scrolling */}
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index + 10}
                                className="flex items-center gap-2 text-xl md:text-5xl opacity-20"
                            >
                                <span>Chatter</span>
                                <span className="text-red">Box</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8 items-center my-6 md:my-24">
                    <div className="text-3xl">Official Links</div>

                    <div className="offical-links grid  sm:grid-cols-2 md:grid-cols-4 gap-10 xs:gap-8 items-center flex-wrap justify-center py-8">
                        {socials.map((social, index) => (
                            <section
                                data-aos="fade-up"
                                key={'social' + index}
                                className="card"
                                data-aos-duration="2000"
                                data-aos-delay={index * 100}
                            >
                                <div className="card_inner hover:shadow-md black-red-gradient-bg hover:scale-105 cursor-pointer transition-all bflex flex-col gap-2 rounded-xl  p-4 px-10  relative text-white shadow-md">
                                    <div className="card_inner__circle absolute  w-12 h-12 rounded-full  top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-2/3">
                                        <img src={social.img} className="" />
                                    </div>
                                    <div className="card_inner__content">
                                        <div className="relative z-10">
                                            {social.name}:
                                        </div>
                                        <div className="relative z-10">
                                            {social.url}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                {/* Right to Left Scroll */}
                <div className="scrolling-text right-to-left">
                    <div className="flex gap-6">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-xl md:text-5xl opacity-20"
                            >
                                <span>Chatter</span>
                                <span className="text-blue">Box</span>
                            </div>
                        ))}
                        {/* Duplicate the items for continuous scrolling */}
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index + 10}
                                className="flex items-center gap-2 text-xl md:text-5xl opacity-20"
                            >
                                <span>Chatter</span>
                                <span className="text-blue">Box</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfficalLink;
