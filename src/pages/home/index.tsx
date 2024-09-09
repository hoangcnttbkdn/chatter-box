import Section from '../../components/ui/section';
import Title from '../../components/ui/title';

import * as bg1 from '../../assets/images/section1-bg.png';
import * as markIcon from '../../assets/images/mark-icon.png';
import * as markIconSm from '../../assets/images/mark-icon-sm.png';
import * as radial from '../../assets/images/radial-red.png';
import * as radialSm from '../../assets/images/radial-red-sm.png';
import * as message from '../../assets/images/message.svg';
import * as redContent from '../../assets/images/content.png';
import * as threeGroup from '../../assets/images/three-group.png';
import * as twoGroup from '../../assets/images/twogroup.png';
import * as benefitBg from '../../assets/images/benefit-bg.png';

function HomePage() {
    interface Feature {
        title: string;
        content: string;
    }

    const features: Feature[] = [
        {
            title: 'Natural Language: Processing (NLP) and Voice AI',
            content:
                'The chatbot utilizes advanced NLP to understand user queries and generate contextually appropriate voice responses. This makes interactions more fluid and human-like, enhancing the overall user experience.',
        },
        {
            title: 'Tokenized Ecosystem',
            content:
                'Our platform supports a native token ($CHAT), which can be used for staking, governance, and accessing premium features or exclusive AMA sessions.',
        },
        {
            title: 'Easy to Integrate and Use',
            content:
                'The chatbot is designed to integrate effortlessly into Telegram (other social networks such as X (formerly Twitter) are also planned).',
        },
        {
            title: ' Multilingual Support',
            content:
                'By integrating multiple languages, the chatbot  opens AMA sessions to a global audience, ensuring inclusivity and accessibilit',
        },
        {
            title: 'Real-Time AMA Moderation',
            content:
                'The bot can autonomously manage AMA sessions, moderating user questions and delivering instant, relevant responses, which reduces the need for human moderators.',
        },

        {
            title: 'Automated AMA Sessions',
            content:
                'With automated AMA sessions, sessions can be held 24/7 or run simultaneously. This will allow for an AMA to be conducted in different languages at the same time and also reduce the need for additional hosts and resources.',
        },

        {
            title: 'Customizable Personalities',
            content:
                'The personality of the bot can be tailored to reflect the preferences of the AMA host or brand, giving each session a unique flavor.',
        },
    ];

    const problems: {
        title: string;
        description: string;
        subTitle: string;
        items: string[];
        note?: string;
    }[] = [
        {
            title: 'The Problem',
            description: '',
            subTitle:
                'Traditional AMA sessions on Telegram have several challenges',
            items: [
                'Limited Engagement: Text-based interactions can be monotonous and less engaging for users',
                'Time-Consuming Moderation: Managing and moderating live sessions manually requires considerable effort and resources',
                'Scalability Issues: Conducting multiple AMAs simultaneously is nearly impossible without significant human involvemen',
                'Accessibility Barriers: Language limitations and the complexity of text can alienate non-native speakers and those with limited technical proficiency',
            ],
            note: 'These problems highlight the need for a more scalable, accessible, and engaging solution for AMA sessions.',
        },
        {
            title: 'The Solution',
            description: `hatter Box offers a solution by transforming text-based AMA interviews into interactive, voice-driven
sessions. The bot is designed to conduct interviews in real-time, using natural language processing
(NLP) to generate voice responses that closely resemble human conversation. This increases user
engagement, provides faster response times, allows the AMA host to reach a broader, global audience
through multi-language support, and even run simultaneous AMA sessions at the same time.`,
            subTitle: 'Key features of Chatter Box include:',
            items: [
                'Voice-Based Interaction: Users can ask questions and receive real-time voice responses from the bot.',
                'AI-Driven Moderation: The bot handles the flow of conversation and manages the session efficiently without manual inpu',
                `Customizable Personality: The bot’s tone and interaction style can be adapted to fit the brand or AMA host's personality`,
                `Multi-Language Support: The bot supports multiple languages, making AMAs more accessible to a global audience.`,
            ],
        },
    ];

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
            customClass: 'bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        },
    ];
    return (
        <>
            <Section id="about-us" title="">
                <div className="flex flex-col gap-2 w-full h-screen">
                    <img
                        src={bg1.default}
                        alt=""
                        className="absolute w-full h-full top-0 left-0 z-0"
                    />
                    <div className="absolute bottom-0 mx-10 mb-[15vh] left-1/2 -translate-x-1/2">
                        <Title title="About"></Title>
                        <p className="text-center vastago-thin">
                            Chatter Box is a unique voice and AI tool that
                            allows projects to conduct an AMA session without
                            the need for a human host. Entirely powered by AI,
                            Chatter box will respond using an entirely
                            customizable voice to any voice or text based
                            questions
                        </p>
                    </div>
                </div>
            </Section>

            <Section
                id="feature"
                title="Key Features"
                customClassName="relative"
            >
                <img
                    src={radial.default}
                    alt=""
                    className=" absolute top-0 w-1/3 -translate-y-1/4 left-0"
                />
                <img
                    src={radialSm.default}
                    alt=""
                    className=" absolute bottom-0 right-0 w-1/5"
                />
                <div className="relative bg-black border-black  lg:max-w-6xl rounded-xl border p-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                        src={message.default}
                        alt=""
                        className=" absolute bottom-0 right-0 w-1/5 -translate-x-1/2  translate-y-1/3"
                    />
                    {features.map((feature, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-md">
                            <h3 className="text-base font-bold mb-2">
                                {feature.title}
                            </h3>
                            <div className="flex gap-2">
                                <img
                                    src={markIcon.default}
                                    alt=""
                                    className="w-5"
                                />
                                <p className="font-light text-sm">
                                    {feature.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section
                id="benefit"
                title=""
                customClassName="relative flex justify-center items-center"
            >
                <img
                    src={message.default}
                    alt="Background"
                    className="absolute blur-md w-1/3  object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="max-w-6xl relative h-full flex flex-col gap-4 justify-center items-center text-center text-base">
                    <Title title="Introduction"></Title>
                    <p>
                        The rise of blockchain technology and cryptocurrencies
                        has led to significant changes in how individuals and
                        communities interact online. AMA (Ask Me Anything)
                        sessions, especially on platforms like Telegram, have
                        become popular for real-time engagement between
                        influencers, project developers, and their communities.
                        The current text-based format however, is limited in its
                        scope for engagement, scalability, and ultimately, user
                        interaction.
                    </p>
                    <p>
                        Chatter Box aims to revolutionize the AMA experience by
                        introducing voice-based real-time interactions,
                        automating the moderation process, and integrating
                        advanced AI capabilities to make AMA sessions more
                        dynamic, efficient, and engaging. Utilizing Twintone's
                        AI technology, this chatbot will serve as a virtual
                        “twin” of the developers, capable of handling complex
                        interactions, offering real-time responses, and
                        providing multilingual support.
                    </p>
                    <img className="w-1/5" src={redContent.default} alt="" />
                </div>
            </Section>

            <Section
                id="roadmap"
                title=""
                className="relative max-w-6xl mx-auto"
            >
                <>
                    <img
                        src={threeGroup.default}
                        alt=""
                        className="absolute top-2/3 left-0 w-1/5"
                    />
                    <img
                        src={twoGroup.default}
                        alt=""
                        className=" absolute top-0 right-0 w-1/5"
                    />
                    {problems?.map((section, sectionIndex) => {
                        return (
                            <>
                                {
                                    <div
                                        className={
                                            'relative flex flex-col gap-2 ' +
                                            (sectionIndex % 2
                                                ? 'items-end'
                                                : '')
                                        }
                                    >
                                        <div className="text-3xl font-bold">
                                            {section.title}
                                        </div>
                                        <p
                                            className={
                                                'w-2/3 ' +
                                                (sectionIndex % 2
                                                    ? 'text-right'
                                                    : '')
                                            }
                                        >
                                            {section.description}
                                        </p>

                                        <div className="text-red text-xl">
                                            {section.subTitle}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            {section.items?.map((item) => {
                                                return (
                                                    <>
                                                        <div
                                                            className={
                                                                'flex gap-2 ' +
                                                                (sectionIndex %
                                                                2
                                                                    ? 'flex-row-reverse'
                                                                    : '')
                                                            }
                                                        >
                                                            <img
                                                                src={
                                                                    markIconSm.default
                                                                }
                                                                alt=""
                                                                className="w-4"
                                                            />
                                                            <p className="font-light text-base">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                        <i className="font-light text-base">
                                            {section.note}
                                        </i>
                                    </div>
                                }
                            </>
                        );
                    })}
                </>
            </Section>

            <Section
                title=""
                customClassName="relative w-full h-full flex items-center justify-center max-w-6xl mx-auto"
            >
                <img
                    src={benefitBg.default}
                    alt=""
                    className="absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="">
                    <b className="text-5xl text-center relative">
                        Benefits of <br /> Our Solution
                    </b>

                    {benefits?.map((benefit) => {
                        return (
                            <>
                                <div
                                    className={
                                        'absolute flex flex-col gap-2 items-center justify-center w-1/3 ' +
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
            </Section>
        </>
    );
}

export default HomePage;
