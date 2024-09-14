import * as textIcon from '../../assets/images/page/icon text.png';
import * as voiceIcon from '../../assets/images/page/icon voice.png';

function HowItWork() {
    return (
        <>
            <div   data-aos="fade-up" className="flex flex-col gap-8  md:w-4/5 mx-auto overflow-hidden">
                <div className="absolute top-1/3 left-0 z-10 translate-y-1/2 -translate-x-1/6">
                    <img
                        src="howitwork/blur text background.png"
                        className="w-1/2 moving-top-bottom"
                    />
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/4">
                    <img
                        src="howitwork/blur voice background.png"
                        className="w-1/2 ml-auto moving-left-right"
                    />
                </div>
                <p className="md:text-xl text-center">
                    Chatter Box is designed to understand both text and voice
                    inputs, so it can be interacted with in the way that's most
                    convenient for the community.
                </p>
                <div className="flex items-center justify-center flex-col md:flex-row gap-8 px-4 md:px-10">
                    <div className="flex items-center gap-8 feature-background p-2">
                        <img
                            src={textIcon.default}
                            className="w-1/5 object-contain"
                        />
                        <div className="flex flex-col gap-2">
                            <b className="text-xl text-red">For Text:</b>
                            <p className="w-2/3 text-sm">
                                Simply type the question into the chat window.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 feature-background p-2">
                        <img
                            src={voiceIcon.default}
                            className="w-1/5 object-contain"
                        />
                        <div className="flex flex-col gap-2">
                            <b className="text-xl text-red">For Voice:</b>
                            <p className="w-2/3 text-sm">
                                Use the microphone to ask the question aloud.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-center text-base md:text-xl leading-8">
                    Chatter Box uses advanced NLP to instantly analyze
                    questions, recognizing context, intent, and keywords. It
                    provides precise responses for factual inquiries and
                    formulates engaging answers for personalized queries. The
                    bot learns from interactions to improve understanding and
                    adapt to updates about the host's project.
                </p>
            </div>
        </>
    );
}

export default HowItWork;
