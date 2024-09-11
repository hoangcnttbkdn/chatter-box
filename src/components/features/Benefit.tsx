import * as benefitBg from '../../assets/images/benefit-bg.png';

function Benefit() {
    const benefits: {
        title: string;
        content: string;
        customClass: string;
    }[] = [
        {
            title: 'Enhanced User Engagement:',
            content: `Voice interactions lead to more natural,
human-like exchanges, improving user retention
and participation in AMA sessions.`,
            customClass: 'top-1/4 right-0',
        },
        {
            title: 'Scalability:',
            content: `Chatter Box can handle multiple AMA sessions
simultaneously, making it easy for influencers,
brands, and crypto projects to engage with their
audience at scale.`,
            customClass: 'top-1/4 left-0',
        },
        {
            title: 'Cost-Efficiency:',
            content: `By automating moderation and interaction,
hosts can reduce the costs associated with
managing AMA sessions.`,
            customClass: 'top-2/3 left-0',
        },
        {
            title: 'Increased Accessibility:',
            content: `The bot’s multi-language capabilities and
voice-based interactions make it easier for nonnative speakers and less tech-savvy users to
participate.`,
            customClass: 'top-2/3 right-0',
        },
        {
            title: 'Community-Driven Development:',
            content: `With governance tokens, users have a voice in shaping the
future of the platform, ensuring that the product evolves
according to community needs.
`,
            customClass:
                'bottom-0 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
        },
    ];
    return (
        <>
            <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <img
                    src={benefitBg.default}
                    className="h-full w-full object-contain rotate-animation"
                />
            </div>

            <div className="flex flex-col px-4">
                <b className="text-4xl md:text-5xl text-center font-bold relative mb-4 md:mb-0 ">
                    Benefits of <br className="hidden md:block" /> Our Solution
                </b>

                {benefits?.map((benefit) => {
                    return (
                        <>
                            <div
                                className={
                                    'z-10 md:absolute flex flex-col gap-2 items-center justify-center md:w-1/3 ' +
                                    benefit.customClass
                                }
                            >
                                <span className="text-red text-base">
                                    {benefit.title}
                                </span>
                                <p className="text-base text-center">
                                    {benefit.content}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Benefit;
