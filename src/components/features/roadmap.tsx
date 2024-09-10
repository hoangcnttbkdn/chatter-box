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
            description: 'Launch and ProductDevelopment and Marketing',
            todos: [
                `Build the core Chatter Box AI Chat systemwith integrated NLP and voice response capabilities.`,
                `Launch initial Telegram AMA sessions using the botfor a closed group of beta users.`,
                `Some early features such as text to voice translationto be made available for community testing`,
                `Develop token utility features,including staking and governance.`,
                `Initial marketing and promotion by generating interestswith large and established projects on`,
            ],
        },
        {
            title: 'Phase 2',
            time: 'Q1 2025',
            description: 'Platform Expansion',
            todos: [
                `Rollout of the bot for public use, pricing TBA`,
                `Integrate multi-language support andexpand voice capabilities`,
                `Detailed dashboard for Chatter Box hosts for analyticsand review of each AMA session`,
                `Expand the availability of the bot to support othersocial networks such as X (formally Twitter)`,
                `Onboard inﬂuencers, crypto projects,and brands for AMA sessions`,
                `Launch premium AMA sessions andoffer customizable bot personalities for hosts.`,
                `Implement basic revenue sharing for $CHAT holders`,
            ],
        },
        {
            title: 'Phase 3',
            time: 'Q2 2025',
            description: 'Token Integration',
            todos: [
                `Implement token staking, additional rewards,and premium access features.`,
                `Develop the governance framework to allow tokenholders to participate in key platform decisions.`,
                `Introduce multi-chain support for broader token utilityacross various ecosystems.`,
            ],
        },
        {
            title: 'Phase 4',
            time: 'Q3 2025',
            description: 'Global Expansion & Full Launch',
            todos: [
                `Scale the platform to support a global user base with24/7 multilingual AI interactions.`,
                `Host large-scale AMA events in partnershipwith major crypto projects and influencers`,
                `Implement user-driven platform improvements throughgovernance votes and community feedback.`,
            ],
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black my-10 px-4 md:px-8 relative overflow-hidden max-w-6xl mx-auto">
            <img
                src={visualCenter.default}
                alt=""
                className={
                    'absolute top-0 left-1/2 -translate-x-1/2 w-1/3'
                }
            />
            {milestones?.map((milestone, mileStoneIndex) => {
                return (
                    <div
                        key={'milestone' + mileStoneIndex}
                        className="relative p-4"
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
                                'flex flex-col my-2 relative z-10 ' +
                                (mileStoneIndex % 2
                                    ? 'items-start'
                                    : 'items-end')
                            }
                        >
                            <b className="text-2xl">{milestone.title}</b>
                            <b className="text-sm">{milestone.time}</b>
                            <p className="text-sm"> {milestone.description}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {milestone.todos?.map((todo, index) => {
                                return (
                                    <div
                                        key={'milestone-todo' + index}
                                        className={
                                            'flex gap-2  ' +
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
                                        <p className="font-light text-sm">
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
