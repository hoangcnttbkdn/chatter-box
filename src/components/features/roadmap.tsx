import * as markIconSm from '../../assets/images/mark-icon-sm.png';
import * as roadmapBg from '../../assets/images/roadmap-bg.png';
import * as roadmapBgFlip from '../../assets/images/roadmap-bg-flip.png';
import * as visualCenter from '../../assets/images/visual center.png';

function Roadmap() {
    const milestones: {
        title: string;
        time: string;
        description: string;
        todos: string[];
    }[] = [
        {
            title: 'Phase 1',
            time: 'Q4 2024',
            description: 'Product Development and Marketing',
            todos: [
                `Build the core Chatter Box AI chat system with integrated NLP and voice response capabilities`,
                `Development of any language (text or voice) to produce an English audio translation`,
                `Launch of an MVP version of Chatter Box to test core functionalities on Telegram for select beta testers`,
                `Performance monitoring to ensure response time and user satisfaction`,
                `Launch of initial marketing to onboard potential users`,
                `AMA and press release highlighting unique features and benefits`,
                `Advertising campaigns across multiple social networks`,
            ],
        },
        {
            title: 'Phase 2',
            time: 'Q1 2025',
            description: 'Partnerships and Token Integration',
            todos: [
                `Identify potential partners including technology providers, content creators, service providers, or other AI projects for integration or co-development`,
                `Community building and feedback campaigns to collect user feedback`,
                `Implement token staking for additional rewards`,
                `Develop the governance framework to allow token holders to participate in key platform decisions`,
                `Implement basic revenue sharing for $CHAT holders`,
            ],
        },
        {
            title: 'Phase 3',
            time: 'Q2 2025',
            description: 'Platform Expansion and Further Collaborations',
            todos: [
                `Integrate multi-language support with expanded voice capabilities`,
                `Database integration for storing conversation and interaction history`,
                `Improve core features including intent recognition and error handling`,
                `Implement security protocols to ensure data is handled securely`,
                `Implement host profiles to allow for customization to Chatter Box’s tone, language, or responses to align with brand identity`,
                `Implementation of a dashboard for real-time analytics to monitor performance, user satisfaction, and areas for improvement`,
                `Collaborations with KOLs and large projects to use Chatter Box for their AMA sessions`,
                `Referral programs where hosts are incentivized to refer others`,
                `Events and webinars attendance to promote Chatter Box`,
                `Expand the availability of Chatter Box to support other social networks such as X (formerly Twitter)`,
            ],
        },
        {
            title: 'Phase 4',
            time: 'Q3 2025',
            description: 'Global Expansion and Further Features',
            todos: [
                `Scale the platform to support a global user base and handle high volumes of concurrent users`,
                `Explore integration with AR/VR for a more immersive AMA experience`,
                `Develop or integrate specialized knowledge bases for industries like healthcare, finance, or education so Chatter Box can be used for real-world applications`,
            ],
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black my-10 px-4 md:px-8 relative overflow-hidden max-w-6xl mx-auto">
            <img
                src={visualCenter.default}
                alt=""
                className={'absolute top-0 left-1/2 -translate-x-1/2 w-1/3'}
            />
            {milestones?.map((milestone, mileStoneIndex) => {
                return (
                    <div
                        key={'milestone' + mileStoneIndex}
                        className="relative p-4"
                        data-aos={
                            mileStoneIndex % 2
                                ? 'fade-up-left'
                                : 'fade-up-right'
                        }
                    >
                        <img
                            src={
                                mileStoneIndex % 2
                                    ? roadmapBg.default
                                    : roadmapBgFlip.default
                            }
                            alt=""
                            className={
                                'absolute w-1/2 top-0  ' +
                                (mileStoneIndex % 2 ? 'left-0' : 'right-0 ')
                            }
                        />
                        <div
                            className={
                                'flex flex-col my-2 relative z-10 gap-2 pb-2 ' +
                                (mileStoneIndex % 2
                                    ? 'items-start'
                                    : 'items-end')
                            }
                        >
                            <b className="text-base md:text-2xl">
                                {milestone.title}
                            </b>
                            <b className="text-md">{milestone.time}</b>
                            <p className="text-md"> {milestone.description}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {milestone.todos?.map((todo, index) => {
                                return (
                                    <div
                                        key={'milestone-todo' + index}
                                        className={
                                            'flex gap-2 ' +
                                            (mileStoneIndex % 2
                                                ? ''
                                                : 'flex-row-reverse text-end')
                                        }
                                    >
                                        <img
                                            src={markIconSm.default}
                                            alt=""
                                            className="w-4 object-contain"
                                        />
                                        <p className="font-light text-md leading-6">
                                            {todo}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Roadmap;
