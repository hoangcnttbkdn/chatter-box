import { Outlet } from 'react-router-dom';
import '../../global.scss';

function MainLayout() {
    return (
        <main className="bg-black text-white min-h-screen">
            <nav className="w-100 px-8 md:px-auto sticky top-0 z-50 ">
                <div className=" md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap">
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between backdrop-blur rounded-sm">
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <a href="#about-us">Abouts</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <a href="#feature">Features</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <a href="#benefit">Benefits</a>
                            </li>
                            <div className="flex items-center gap-2 text-3xl px-8">
                                <span> Chatter</span>
                                <span className="text-red">Box</span>
                            </div>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <a href="#roadmap">Roadmap</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <a href="#tokenomic">Tokenomics</a>
                            </li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400">
                                <a href="#social">Social</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

            <footer></footer>
        </main>
    );
}

export default MainLayout;
