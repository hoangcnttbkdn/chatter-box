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
            content: `Users can use tokens to unlock 
exclusive, high-profile AMA sessions`,
        },
        {
            title: `Staking for Rewards:`,
            content: `Token holders can stake 
tokens in the ecosystem, earning rewards 
based on their participation and contributions`,
        },
        {
            title: `Governance Rights:`,
            content: `Token holders 
can vote on key platform 
developments, feature rollouts, and 
governance policies`,
        },
        {
            title: `Payment for Services`,
            content: `AMA hosts can 
use tokens to pay for custom Chatter 
Box personalities or advanced 
functionalities`,
        },
        {
            title: `Revenue share:`,
            content: `Token holders will be able to 
participate in revenue share with the revenue 
generated from the use of Chatter Box`,
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
                        <div className="text-red md:text-xl">
                            Token Distrubution
                        </div>
                        <div className="flex gap-4">
                            <span className="md:text-base">85% LP</span>
                            <span className="md:text-base">10% Staking</span>
                        </div>
                        <span className="md:text-base">
                            5% Marketing/Partnership
                        </span>
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
                                <b>5%</b> Marketing
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
                    <div className="text-red text-xl md:text-2xl">
                        The native token ($CHAT) on our platform will serve
                        several purposes:
                    </div>
                    {purposes?.map((purpose) => {
                        return (
                            <>
                                <div className="bg-dark-gray rounded-md p-6">
                                    <b>{purpose.title}: </b>
                                    <span>{purpose.content}</span>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="relative z-10 my-4 flex items-center justify-center w-full px-8">
                    <span className="text-center">
                        The tokenized economy will foster community involvement,
                        ensuring that the platform is both user- driven and
                        self-sustaining.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Tokenomic;
