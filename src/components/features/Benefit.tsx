import * as benefitBg from '../../assets/images/benefit-bg.png';

function Benefit() {
    const benefits: {
        title: string;
        content: string;
        customClass: string;
    }[] = [
        {
            title: 'Scalability:',
            content: `Voice interactions enhance natural 
exchanges, boosting user retention and 
participation in AMAs at scale`,
            customClass: 'top-1/4  right-0',
        },
        {
            title: 'Enhanced User Engagement:',
            content: `Voice interactions enhance natural 
exchanges, boosting user retention and 
participation in AMAs`,
            customClass: 'top-1/4 left-0',
        },
        {
            title: 'Cost-Efficiency:',
            content: `Automated moderation reduces AMA 
management costs for hosts`,
            customClass: 'top-2/3 left-0',
        },
        {
            title: 'Increased Accessibility:',
            content: `Multi-language and voice features aid non-native 
and less tech-savvy users participation`,
            customClass: 'top-2/3 right-0',
        },
        {
            title: 'Community-Driven Development:',
            content: `Governance tokens give users a voice in 
shaping the platform's future
`,
            customClass: 'bottom-0 translate-y-3/4 -translate-x-1/4',
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

                {benefits?.map((benefit, index) => {
                    return (
                        <div
                            key={'benefit' + index}
                            data-aos={index % 2 ? 'fade-up-left' : 'fade-up-right'}
                            className={
                                'z-10 md:absolute flex flex-col gap-2 items-center justify-center md:w-1/3 ' +
                                benefit.customClass
                            }
                        >
                            <span className="text-red text-xl md:text-2xl text-center">
                                {benefit.title}
                            </span>
                            <p className="text-md text-center w-4/5">
                                {benefit.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Benefit;
