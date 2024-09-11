import * as cube from '../../assets/images/page/cube.png';
import * as box from '../../assets/images/box.png';

function AboutUs() {
    return (
        <div className="flex flex-col gap-2 w-full h-screen">
            <div className="absolute h-1/2 left-1/2 -translate-x-1/2 -translate-y-[10%] z-10">
                <img src="page1/visual logo.png" className="w-2/3 mx-auto" />
            </div>

            <div className="grid items-center justify-center grid-cols-4 mx-auto">
                <div></div>
                <div className="relative">
                    <div className="absolute w-2/5 top-0 left-0 -translate-x-1/2 z-10">
                        <img
                            src={cube.default}
                            alt=""
                            className="animation-move-up"
                        />
                    </div>

                    <img
                        src={box.default}
                        alt=""
                        className="-translate-x-1/2"
                    />
                </div>

                <div className="relative">
                    <div className="absolute w-2/5 top-0 right-0 translate-x-1/2 z-10">
                        <img
                            src={cube.default}
                            alt=""
                            className="animation-move-down"
                        />
                    </div>

                    <img src={box.default} alt="" className="translate-x-1/2" />
                </div>
                <div></div>
                <div className="relative">
                    <div className="absolute w-2/5 top-0 right-1/2  z-10">
                        <img
                            src="page1/red-cube.png"
                            alt=""
                            className="animation-move-down"
                        />
                    </div>

                    <img src={box.default} alt="" />
                </div>
                <img src={box.default} alt="" className="opacity-75" />
                <img src={box.default} alt="" className="opacity-75" />
                <div className="relative">
                    <div className="absolute w-2/5 top-0 left-1/2 z-10">
                        <img
                            src="page1/red-cube.png"
                            alt=""
                            className="animation-move-up"
                        />
                    </div>

                    <img src={box.default} alt="" />
                </div>
            </div>

            <div className="absolute w-full bottom-[10vh] px-8 z-20 flex flex-col gap-4 items-center justify-center">
                <p className="text-center vastago-thin max-w-2xl">
                    Chatter Box is a unique voice and AI tool that allows
                    projects to conduct an AMA session without the need for a
                    human host. Entirely powered by AI, Chatter box will respond
                    using an entirely customizable voice to any voice or text
                    based questions
                </p>
                <div className="cursor-pointer launch-app-btn py-2 rounded-xl text-2xl px-8 vastago-extra-light">
                    Launch App
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
