import * as cube from '../../assets/images/page/cube.png';

function AboutUs() {
    const cubes = ['', 'ml-auto', ' translate-x-1/2', '-translate-x-1/2 ml-auto'];
    return (
        <div className="grid grid-cols-2 gap-2 w-full px-2 md:px-10">
            <div className="absolute top-1/4 w-1/3 left-0 -translate-x-1/2">
                <img src="radial-red.png" alt="" className="" />
            </div>

            <div className="px-8 z-20 flex flex-col gap-4 items-start justify-center">
                <div className="text-xl md:text-4xl vastago-bold">
                    Engage Like Never Before
                </div>
                <p className="text-left vastago-thin max-w-2xl jakarta-regular text-base md:text-xl">
                    Chatter Box: Where AI meets voice for next-gen developer
                    AMAs
                </p>
                <div className="cursor-pointer launch-app-btn py-2 rounded-xl text-2xl px-8 vastago-extra-light">
                    Launch App
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center">
                <div className="z-30">
                    <img
                        src="page1/visual logo.png"
                        className="w-2/3 mx-auto"
                    />
                </div>

                <div className="absolute top-0 left-0  w-full h-full">
                    <div className="grid items-center justify-center grid-cols-2 grid-rows-2">
                        {cubes?.map((_, index) => {
                            return (
                                <div className={' w-2/5 z-10 ' + _}>
                                    <img
                                        src={cube.default}
                                        alt=""
                                        className={ index % 3 ? 'animation-move-up' : 'animation-move-down'}
                                    />
                                </div>
                            );
                        })}{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
