import { Outlet } from 'react-router-dom';
import '../../global.scss';

function MainLayout() {
    return (
        <main className="bg-black text-white md:min-h-screen">
            <nav className="w-100 px-8 md:px-auto sticky top-0 z-50 backdrop-blur">
                <div className="py-4 md:py-6 mx-auto md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap">
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 ">
                        <ul className="flex font-semibold justify-between  rounded-sm">
                            <li className="md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-base lg:text-xl">
                                <a href="#about-us">About</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-base lg:text-xl">
                                <a href="#feature">Features</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-base lg:text-xl">
                                <a href="#benefit">Benefits</a>
                            </li>
                            <div className="hidden md:flex items-center gap-2 text-2xl md:text-4xl px-8 font-bold text-white">
                                <span> Chatter</span>
                                <span className="text-red">Box</span>
                            </div>
                            <li className="md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-base lg:text-xl">
                                <a href="#roadmap">Roadmap</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-base lg:text-xl">
                                <a href="#tokenomic">Tokenomics</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-base lg:text-xl">
                                <a href="#social">Socials</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex md:hidden items-center gap-2 text-2xl md:text-4xl px-8 font-bold text-white">
                        <span> Chatter</span>
                        <span className="text-red">Box</span>
                    </div>
                </div>
            </nav>

            <Outlet />

            <footer></footer>
        </main>
    );
}

export default MainLayout;
