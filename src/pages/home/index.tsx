import Section from '../../components/ui/section';
import Title from '../../components/ui/title';

import * as bg1 from '../../assets/images/section1-bg.png';
import * as markIcon from '../../assets/images/mark-icon.png';
import * as radial from '../../assets/images/radial-red.png';
import * as radialSm from '../../assets/images/radial-red-sm.png';
import * as message from '../../assets/images/message.svg';
import * as redContent from '../../assets/images/content.png';

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
    return (
        <>
            <Section title="">
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

            <Section title="Key Features" customClassName="relative">
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

            <Section title="The Problem">
                <></>
            </Section>
            <Section title="Introduction"></Section>
        </>
    );
}

export default HomePage;
