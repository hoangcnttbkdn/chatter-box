import { Outlet } from 'react-router-dom';
import '../../global.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';
import * as Pdf from '../../assets/CHATTER_compressed.pdf';
interface NavItem {
    href: string;
    name: string;
    key?: string;
}

function MainLayout() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const navItems: NavItem[] = [
        { href: 'about-us', name: '' },
        { href: 'about-us', name: 'About' },
        { href: 'feature', name: 'Features' },
        { href: 'benefit', name: 'Benefits' },
        { href: '', name: '', key: 'logo' },
        { href: 'roadmap', name: 'Roadmap' },
        { href: 'tokenomic', name: 'Tokenomics' },
        { href: 'social', name: 'Socials' },
    ];
    const hasKeyItem = navItems.some((item) => item.key !== undefined);

    return (
        <main className="bg-black text-white md:min-h-screen">
            <nav className="w-100 px-8 md:px-auto sticky top-0 z-50 backdrop-blur">
                <div className="py-4 md:py-4 mx-auto md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap">
                    <div
                        className={`text-gray-500 ${
                            hasKeyItem
                                ? 'order-3 w-full md:w-auto md:order-2'
                                : 'order-1 w-full'
                        } flex flex-wrap justify-center md:justify-between`}
                    >
                        <ul className="flex font-semibold justify-between rounded-sm gap-2 md:gap-4">
                            {navItems.map((item, index) =>
                                item.key ? (
                                    <div
                                        key={'nav' + index}
                                        className="hidden md:flex items-center gap-2 text-2xl md:text-3xl px-2 font-bold text-white"
                                    >
                                        <span>Chatter</span>
                                        <span className="text-red">Box</span>
                                    </div>
                                ) : (
                                    <li
                                        key={item.href}
                                        className="nav-item  min-w-20 cursor-pointer md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-md lg:text-base "
                                    >
                                        <a href={`#${item.href}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            )}
                            <li className="nav-item  min-w-20 cursor-pointer md:px-4 md:py-2 hover:text-orange-600 text-xs md:text-md lg:text-base ">
                                <a href={Pdf.default} target="_blank">
                                    Whitepaper
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex md:hidden items-center gap-2 text-2xl md:text-4xl px-8 font-bold text-white">
                        <span>Chatter</span>
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
