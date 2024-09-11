import * as markIconSm from '../../assets/images/mark-icon-sm.png';
import * as threeGroup from '../../assets/images/three-group.png';
import * as twoGroup from '../../assets/images/twogroup.png';

function Problem() {
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
            description: ``,
            subTitle: 'Key features of Chatter Box include:',
            items: [
                'Voice-Based Interaction: Users can ask questions and receive real-time voice responses from the bot.',
                'AI-Driven Moderation: The bot handles the flow of conversation and manages the session efficiently without manual inpu',
                `Customizable Personality: The bot’s tone and interaction style can be adapted to fit the brand or AMA host's personality`,
                `Multi-Language Support: The bot supports multiple languages, making AMAs more accessible to a global audience.`,
            ],
        },
    ];
    return (
        <>
            <img
                src={threeGroup.default}
                alt=""
                className="animation-move-up absolute top-2/3 left-0 w-1/4 "
            />
            <img
                src={twoGroup.default}
                alt=""
                className="animation-move-down absolute top-1/6 right-0 w-1/4 "
            />
            <div className="flex flex-col gap-4 md:gap-16">
                {problems?.map((section, sectionIndex) => {
                    return (
                        <>
                            {
                                <div
                                    className={
                                        'relative flex flex-col gap-2 ' +
                                        (sectionIndex % 2 ? 'items-end' : '')
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

                                    <div
                                        className={
                                            'flex flex-col gap-2 ' +
                                            (sectionIndex % 2
                                                ? 'w-4/5'
                                                : 'w-5/6')
                                        }
                                    >
                                        {section.items?.map((item) => {
                                            return (
                                                <>
                                                    <div
                                                        className={
                                                            'flex gap-2 ' +
                                                            (sectionIndex % 2
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
                                                        <p
                                                            className={
                                                                'font-light text-sm ' +
                                                                (sectionIndex %
                                                                2
                                                                    ? 'text-right'
                                                                    : '')
                                                            }
                                                        >
                                                            {item}
                                                        </p>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <i className="font-light text-xs text-gray-500">
                                        {section.note}
                                    </i>
                                </div>
                            }
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Problem;
