import * as chart from '../../assets/images/page/chart.png';
import * as circleBg from '../../assets/images/page/circle background.png';
import * as commentFrame1 from '../../assets/images/page/comment 1.png';
import * as commentFrame2 from '../../assets/images/page/comment 2.png';

import * as logo from '../../assets/images/page/logo.png';

function Tokenomic() {
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
            title: `Staking Rewards:`,
            content: `Token holders can stake 
tokens to earn rewards for participation`,
        },
        {
            title: `Governance Rights:`,
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
            title: `Revenue share:`,
            content: `Token holders can share in 
Chatter Box's revenue`,
        },
    ];
    return (
        <>
            <div className="relative z-10 max-w-6xl mx-auto px-20 md:px-4 sm:grid grid-cols-2 md:grid-cols-3 items-center gap-8">
                <div className="relative ">
                    <img
                        src={commentFrame1.default}
                        className="object-contain"
                    />
                    <div className="absolute w-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                        <div className="text-red md:text-base font-bold">
                            Token Distrubution
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">
                                Supply: <b>100M</b>
                            </span>
                            <span className="text-sm">
                                Name: <b>Chatter Box</b>
                            </span>
                            <span className="text-sm">
                                Ticket: <b>CHAT</b>
                            </span>
                            <span className="text-sm">
                                LP: <b>Locked</b>
                            </span>
                            <span className="text-sm">
                                Contract: <b>Renounced</b>
                            </span>
                        </div>
                    </div>
                </div>
                <img
                    src={logo.default}
                    className="object-contain hidden md:block"
                />
                <div className="relative">
                    <img
                        src={commentFrame2.default}
                        className="object-contain"
                    />
                    <div className="absolute w-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-2">
                        <div className="text-red md:text-xl">Tax Structure</div>
                        <span className="text-2xl md:text-4xl">5/5</span>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col gap-4 md:gap-10">
                <div className="absolute top-0 -translate-y-1/4">
                    <img src={circleBg.default} className="shake-animation " />
                </div>

                <div className="relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center w-full">
                        <p className="col-span-2 col-start-2 md:col-start-1 md:col-span-1 text-center text-xl md:text-3xl flex items-center gap-4 justify-end flex-row-reverse md:flex-row">
                            <b>85%</b> LP
                            <div className="line"></div>
                        </p>

                        <img
                            src={chart.default}
                            className="w-4/5 m-auto z-20"
                        />
                        <div className="flex flex-col items-start gap-8 text-base relative left-4 md:left-10">
                            <p className="flex items-center gap-2">
                                <div className="line line--break-top"></div>
                                <b>5%</b> Marketing /
                                <br className="block md:hidden"></br>
                                Partnership
                            </p>
                            <p className="flex items-center gap-2">
                                <div className="line line--break-top"></div>{' '}
                                <b>10%</b> Staking
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-4 md:gap-10 bg-black px-10">
                    <div className="text-orange text-xl md:text-xl flex items-end justify-start">
                        The native token ($CHAT) on our platform will serve
                        several purposes:
                    </div>
                    {purposes?.map((purpose) => {
                        return (
                            <>
                                <div className="bg-dark-gray rounded-md p-6">
                                    <b className="text-sm">{purpose.title}: </b>
                                    <span className="text-sm">
                                        {purpose.content}
                                    </span>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Tokenomic;
