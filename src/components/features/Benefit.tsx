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
            customClass: '',
        },
        {
            title: 'Enhanced User Engagement:',
            content: `Voice interactions enhance natural 
exchanges, boosting user retention and 
participation in AMAs`,
            customClass: '',
        },
        {
            title: 'Cost-Efficiency:',
            content: `Automated moderation reduces AMA 
management costs for hosts`,
            customClass: '',
        },
        {
            title: 'Increased Accessibility:',
            content: `Multi-language and voice features aid non-native 
and less tech-savvy users participation`,
            customClass: '',
        },
        {
            title: 'Community-Driven Development:',
            content: `Governance tokens give users a voice in 
shaping the platform's future
`,
            customClass: ' col-span-2 md:mt-10',
        },
    ];
    return (
        <>
            <div className="flex flex-col px-4">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-32 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3">
                        <img
                            src={benefitBg.default}
                            className="h-full w-full object-contain rotate-animation"
                        />
                    </div>
                    <b className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-3/4 text-3xl md:text-4xl text-center font-bold mb-4 md:mb-0 mx-auto">
                        Benefits of <br className="hidden md:block" /> Our
                        Solution
                    </b>

                    {benefits?.map((benefit, index) => {
                        return (
                            <div
                                key={'benefit' + index}
                                data-aos={
                                    index * 2 ? 'fade-up-left' : 'fade-up-right'
                                }
                                className={
                                    ' z-10 flex flex-col gap-2 items-center justify-center mx-auto md:w-3/4 ' +
                                    benefit.customClass
                                }
                            >
                                <span className="text-red text-base md:text-xl text-center">
                                    {benefit.title}
                                </span>
                                <p className="text-sm md:text-base text-center w-3/4 md:w-4/5">
                                    {benefit.content}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Benefit;
