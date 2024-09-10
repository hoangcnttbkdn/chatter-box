import Section from '../../components/ui/section';
import Title from '../../components/ui/title';

import * as markIcon from '../../assets/images/mark-icon.png';
import * as markIconSm from '../../assets/images/mark-icon-sm.png';
import * as radial from '../../assets/images/radial-red.png';
import * as radialSm from '../../assets/images/radial-red-sm.png';
import * as message from '../../assets/images/message.svg';
import * as redContent from '../../assets/images/content.png';
import * as threeGroup from '../../assets/images/three-group.png';
import * as twoGroup from '../../assets/images/twogroup.png';
import * as benefitBg from '../../assets/images/benefit-bg.png';
import * as textIcon from '../../assets/images/page/icon text.png';
import * as voiceIcon from '../../assets/images/page/icon voice.png';
import * as commentFrame1 from '../../assets/images/page/comment 1.png';
import * as commentFrame2 from '../../assets/images/page/comment 2.png';
import * as logo from '../../assets/images/page/logo.png';
import * as circleBg from '../../assets/images/page/circle background.png';
import * as chart from '../../assets/images/page/chart.png';
import * as cube from '../../assets/images/page/cube.png';
import * as box from '../../assets/images/box.png';
import * as emptyMessage from '../../assets/images/empty-message.png';

import './home.scss';
import ThreeDots from '../../components/ui/three-dots/three-dots';

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
            customClass:
                'bottom-0 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
        },
    ];

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
            <Section id="about-us" title="">
                <div className="flex flex-col gap-2 w-full h-screen">
                    <div className="absolute h-1/2 top-1/6 left-1/2 -translate-x-1/2 z-10">
                        <img src={logo.default} alt="" className="" />
                        <div className="absolute top-0 right-0 w-3/5">
                            <img src={emptyMessage.default} alt="" />
                            <div className="w-full z-20 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <ThreeDots></ThreeDots>
                            </div>
                        </div>
                    </div>

                    <div className="grid items-center justify-center grid-cols-4 mx-auto">
                        <div></div>
                        <div className="relative">
                            <div className="absolute w-2/5 top-0 left-0 -translate-x-1/2 z-10">
                                <img
                                    src={cube.default}
                                    alt=""
                                    className="animation-move-up"
                                />
                            </div>

                            <img
                                src={box.default}
                                alt=""
                                className="-translate-x-1/2"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute w-2/5 top-0 right-0 translate-x-1/2 z-10">
                                <img
                                    src={cube.default}
                                    alt=""
                                    className="animation-move-down"
                                />
                            </div>

                            <img
                                src={box.default}
                                alt=""
                                className="translate-x-1/2"
                            />
                        </div>
                        <div></div>
                        <img src={box.default} alt="" className="opacity-75" />
                        <img src={box.default} alt="" className="opacity-75" />
                        <img src={box.default} alt="" className="opacity-75" />
                        <img src={box.default} alt="" className="opacity-75" />
                    </div>

                    <div className="absolute w-full bottom-[10vh] px-8 z-20 flex flex-col gap-4 items-center justify-center">
                        <p className="text-center vastago-thin max-w-2xl">
                            Chatter Box is a unique voice and AI tool that
                            allows projects to conduct an AMA session without
                            the need for a human host. Entirely powered by AI,
                            Chatter box will respond using an entirely
                            customizable voice to any voice or text based
                            questions
                        </p>
                        <div className="cursor-pointer box py-6 rounded-3xl text-3xl px-12 vastago-extra-light">
                            Launch App
                        </div>
                    </div>
                </div>
            </Section>

            <Section
                id="feature"
                title="Key Features"
                customClassName="relative px-8"
            >
                <img
                    src={radial.default}
                    alt=""
                    className="absolute top-0 w-1/3 -translate-y-1/4 left-0"
                />
                <img
                    src={radialSm.default}
                    alt=""
                    className=" absolute bottom-0 right-0 w-1/5"
                />
                <div className="relative bg-black border-black  lg:max-w-6xl rounded-xl border p-4 md:p-8 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6">
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
                title=""
                customClassName="relative flex justify-center items-center"
            >
                <img
                    src={message.default}
                    alt="Background"
                    className="absolute blur-md w-1/3  object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="max-w-6xl px-8 relative h-full flex flex-col gap-4 justify-center items-center text-center text-base">
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

            <Section title="" className="relative max-w-6xl mx-auto px-8">
                <>
                    <img
                        src={threeGroup.default}
                        alt=""
                        className="absolute top-2/3 left-0 w-1/5 "
                    />
                    <img
                        src={twoGroup.default}
                        alt=""
                        className="absolute top-0 right-0 w-1/5 "
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
                                                'md:w-2/3 ' +
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
                                                                className="w-4 object-contain"
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
                id="benefit"
                title=""
                customClassName="relative w-full h-full flex items-center justify-center max-w-6xl mx-auto"
            >
                <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <img
                        src={benefitBg.default}
                        className="h-full w-full object-contain rotate-animation"
                    />
                </div>

                <div className="flex flex-col">
                    <b className="text-4xl md:text-5xl text-center relative mb-4 md:mb-0">
                        Benefits of <br className="hidden md:block" /> Our
                        Solution
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
            </Section>

            <Section
                title="How it Works"
                customClassName="max-w-6xl mx-auto px-8"
            >
                <div className="flex flex-col gap-8">
                    <p className="md:text-xl text-center">
                        Chatter Box is designed to understand both text and
                        voice inputs, so it can be interacted with in the way
                        that's most convenient for the community.
                    </p>
                    <div className="flex items-center flex-col md:flex-row gap-8">
                        <div className="flex items-center gap-8 feature-background px-4">
                            <img
                                src={textIcon.default}
                                className="h-2/3 object-contain"
                            />
                            <div className="flex flex-col gap-2">
                                <b className="text-2xl text-red">For Text</b>
                                <p className="w-2/3">
                                    Simply type the question into the chat
                                    window.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 feature-background px-4">
                            <img
                                src={voiceIcon.default}
                                className="h-2/3 object-contain"
                            />
                            <div className="flex flex-col gap-2">
                                <b className="text-2xl text-red">For Voice</b>
                                <p className="w-2/3">
                                    Use the microphone to ask the question
                                    aloud.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center">
                        Powered by advanced natural language processing (NLP),
                        the chatbot then instantly analyzes the question,
                        recognizing context, intent, and keywords. Whether the
                        question is in regards to factual information, need
                        step-by-step guidance, or seeking recommendations,
                        Chatter Box is designed to understand the query as if
                        you’re conversing with a real person.
                    </p>
                    <p className="text-center">
                        Once your question is processed, Chatter Box will
                        leverage it’s vast knowledge base and AI-driven
                        algorithms to generate a precise, informative response.
                        If it’s a factual question, the bot will retrieve
                        relevant information quickly. For more personalized or
                        conversational queries, it dynamically formulates
                        responses to provide the most useful and engaging
                        answers.
                    </p>
                    <p className="text-center">
                        Chatter Box is also designed to get smarter with every
                        interaction and scale at the same time as the host’s
                        project. It will learn from past conversations to
                        improve its ability to understand and respond to future
                        questions, and will seemingly incorporate new
                        information and updates about the host’s project.
                    </p>
                </div>
            </Section>

            <Section
                id="tokenomic"
                title="Tokenomics and Utility - $CHAT"
                customClassName="relative"
            >
                <div className="max-w-6xl mx-auto  grid grid-cols-2 md:grid-cols-3 items-center gap-8">
                    <div className="relative">
                        <img
                            src={commentFrame1.default}
                            className="object-contain"
                        />
                        <div className="absolute w-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                            <div className="text-red md:text-xl">
                                Token Distrubution
                            </div>
                            <div className="flex md:flex-col gap-4">
                                <span className="md:text-base">85% LP</span>
                                <span className="md:text-base">
                                    10% Staking
                                </span>
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
                            <div className="text-red md:text-xl">
                                Tax Structure
                            </div>
                            <span className="text-2xl md:text-4xl">5/5</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src={circleBg.default} className="" />

                    <div className="absolute w-full top-[16%] md:top-1/4">
                        <div className="grid grid-cols-3 items-center justify-center w-full">
                            <p className="text-center text-xl md:text-3xl flex items-center gap-4 justify-end">
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
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 md:gap-10 bg-black px-10">
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
                    <div className="my-4 flex items-center justify-center w-full px-8">
                        <span className="text-center">
                            The tokenized economy will foster community
                            involvement, ensuring that the platform is both
                            user- driven and self-sustaining.
                        </span>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default HomePage;
