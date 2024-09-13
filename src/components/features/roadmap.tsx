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
                `Develop AI Chat with NLP and voice`,
                `Language-to-English audio translation`,
                `MVP launch on Telegram for beta testing`,
                `Monitor performance and user satisfaction`,
                `Initial marketing for user onboarding`,
                `AMA & Press release on unique features`,
                `Multi-platform advertising`,
            ],
        },
        {
            title: 'Phase 2',
            time: 'Q1 2025',
            description: 'Partnerships and Token Integration',
            todos: [
                `User feedback through community campaigns`,
                `Token staking for enhanced rewards`,
                `Governance framework for token holder decision-making`,
                `Strategic partnerships with tech projects, content creators, and AI projects`,
                `$CHAT revenue sharing for token holders`,
            ],
        },
        {
            title: 'Phase 3',
            time: 'Q2 2025',
            description: 'Platform Expansion and Further Collaborations',
            todos: [
                `Add multi-language voice support`,
                `Store conversation history in a database`,
                `Enhance intent recognition and error management`,
                `Secure data handling protocols`,
                `Customizable host profiles for brand alignment`,
                `Real-time analytics dashboard`,
                `Partner with KOLs for AMAs`,
                `Host referral incentives`,
                `Promote via events and webinars`,
                `Extend Chatter Box to other social platforms like X`,
            ],
        },
        {
            title: 'Phase 4',
            time: 'Q3 2025',
            description: 'Global Expansion and Further Features',
            todos: [
                `Global scalability for high user volumes`,
                `AR/VR for a more immersive AMA experience`,
                `Customizable avatars and environments`,
                `Develop or integrate industry-specific knowledge bases for healthcare, finance, education, etc.`,
                `Integrate Chatter Box beyond social networks with other daily use platforms such as productivity apps and IoT devices`,
                `Real time voice-to-voice translation and live stream`,
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
