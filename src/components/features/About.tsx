import * as message from '../../assets/images/message.svg';
import Title from '../ui/title';

function About() {
    return (
        <div className='my-4'>
            <img
                src={message.default}
                alt="Background"
                className="absolute blur-md w-1/3  object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="max-w-6xl px-8 relative h-full flex flex-col gap-4 justify-center items-center text-center text-base">
                <Title title="About"></Title>
                <div>
                    The rise of blockchain technology and cryptocurrencies has
                    led to significant changes in how individuals and
                    communities interact online. AMA (Ask Me Anything) sessions,
                    especially on platforms like Telegram, have become popular
                    for real-time engagement between influencers, project
                    developers, and their communities. The current text-based
                    format however, is limited in its scope for engagement,
                    scalability, and ultimately, user interaction.
                </div>
                <div>
                    Chatter Box aims to revolutionize the AMA experience by
                    introducing voice-based real-time interactions, automating
                    the moderation process, and integrating advanced AI
                    capabilities to make AMA sessions more dynamic, efficient,
                    and engaging. Utilizing Twintone's AI technology, this
                    chatbot will serve as a virtual “twin” of the developers,
                    capable of handling complex interactions, offering real-time
                    responses, and providing multilingual support.
                </div>
                <ul className="flex">
                    <li className="backwards text-3xl text-red font-bold">A</li>
                    <li className="backwards text-3xl text-red font-bold">b</li>
                    <li className="backwards text-3xl text-red font-bold">o</li>
                    <li className="backwards text-3xl text-red font-bold">u</li>
                    <li className="backwards text-3xl text-red font-bold">t</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
