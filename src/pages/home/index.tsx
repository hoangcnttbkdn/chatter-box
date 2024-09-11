import About from '../../components/features/About';
import AboutUs from '../../components/features/AboutUs';
import Benefit from '../../components/features/Benefit';
import HowItWork from '../../components/features/HowItWork';
import KeyFeature from '../../components/features/KeyFeature';
import OfficalLink from '../../components/features/OfficalLink';
import Problem from '../../components/features/Problem';
import Roadmap from '../../components/features/roadmap';
import Tokenomic from '../../components/features/Tokenomic';
import Section from '../../components/ui/section';
import './home.scss';

function HomePage() {
    return (
        <>
            <Section id="about-us" title="">
                <AboutUs></AboutUs>
            </Section>

            <Section
                id="feature"
                title="Key Features"
                customClassName="relative px-4"
            >
                <KeyFeature></KeyFeature>
            </Section>

            <Section
                id="about"
                title=""
                customClassName="relative flex justify-center items-center"
            >
                <About></About>
            </Section>

            <Section
                id="problem"
                title=""
                className="relative max-w-6xl mx-auto px-8"
            >
                <Problem></Problem>
            </Section>

            <Section
                id="benefit"
                title=""
                customClassName="min-h-screen relative w-full h-full flex items-center justify-center max-w-6xl mx-auto"
            >
                <Benefit></Benefit>
            </Section>

            <Section
                id="howitwork"
                title="How it Works"
                customClassName="max-w-6xl mx-auto px-8 relative"
            >
                <HowItWork></HowItWork>
            </Section>

            <Section
                id="tokenomic"
                title="Tokenomics and Utility - $CHAT"
                customClassName="relative"
            >
                <Tokenomic></Tokenomic>
            </Section>

            <Section id="roadmap" title="Roadmap" customClassName="relative">
                <Roadmap></Roadmap>
            </Section>
            <Section id="social" title="" customClassName="relative">
                <OfficalLink></OfficalLink>
            </Section>
        </>
    );
}

export default HomePage;
