import * as socialBg from '../../assets/images/social-bg.png';

function OfficalLink() {
    const socials: {
        name: string;
        url: string;
    }[] = [
        {
            name: 'Website',
            url: '########',
        },
        {
            name: 'Telegram',
            url: '########',
        },
        {
            name: 'Twitter',
            url: '########',
        },
        {
            name: 'Etherscan',
            url: '########',
        },
    ];
    return (
        <div className="flex flex-col gap-10 items-center mb-20">
            <div className="flex gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-5xl opacity-20"
                    >
                        <span>Chatter</span>
                        <span className="text-red">Box</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-8 items-center my-6">
                <div className="text-3xl">Official Links</div>
                <div className="flex gap-8 items-center flex-wrap justify-center">
                    {socials?.map((social, index) => {
                        return (
                            <div
                                key={'social-' + index}
                                className="flex flex-col gap-2 rounded-xl overflow-hidden p-4 px-10  relative text-white shadow-md"
                            >
                                <img
                                    src={socialBg.default}
                                    alt=""
                                    className={
                                        'absolute w-full h-full top-0 left-0 object-cover'
                                    }
                                />
                                <div className="relative z-10">
                                    {social.name}:
                                </div>
                                <div className="relative z-10">
                                    {social.url}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-5xl opacity-20"
                    >
                        <span>Chatter</span>
                        <span className="text-red">Box</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfficalLink;
