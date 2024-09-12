import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';

function AboutUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // const cubes = [
    //     '',
    //     'ml-auto',
    //     ' translate-x-1/2',
    //     '-translate-x-1/2 ml-auto',
    // ];
    return (
        <div className="gap-y-10 md:gap-2 w-full px-2 md:px-10">
            <div className="video-background-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="bgvideo.mp4" type="video/mp4" />
                </video>
                <div className="content-overlay">
                    <div className="px-8 z-20 flex h-3/5 flex-col gap-4 items-center justify-end">
                        <div
                            data-aos="fade-up"
                            className="text-xl md:text-4xl vastago-bold"
                        >
                            Engage Like Never Before
                        </div>
                        <p
                            data-aos="fade-up"
                            className="text-left vastago-thin max-w-2xl jakarta-regular text-base md:text-xl"
                        >
                            Chatter Box: Where AI meets voice for next-gen
                            developer AMAs
                        </p>
                        <div
                            data-aos="fade-up"
                            className="cursor-pointer launch-app-btn py-2 rounded-xl text-base md:text-2xl px-4 md:px-8 vastago-extra-light"
                        >
                            Launch App
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
