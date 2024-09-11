import * as radialSm from '../../assets/images/radial-red-sm.png';
import * as radial from '../../assets/images/radial-red.png';
import * as markIcon from '../../assets/images/mark-icon.png';
import * as message from '../../assets/images/message.svg';

function KeyFeature() {
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
            <div className="absolute top-0 w-1/3 -translate-y-1/4 left-0">
                <img src={radial.default} alt="" className="" />
            </div>

            <img
                src={radialSm.default}
                alt=""
                className=" absolute bottom-0 right-0 w-1/5"
            />
            <div className="relative bg-black border-black  lg:max-w-6xl rounded-xl border p-4 md:p-8 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <img
                    src={message.default}
                    alt=""
                    className=" moving-left-right absolute bottom-0 right-0 w-1/5 -translate-x-1/2  translate-y-1/3"
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
        </>
    );
}

export default KeyFeature;
