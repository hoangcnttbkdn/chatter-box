interface TitleProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
}
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS animations styles
import { useEffect } from 'react';

const Title = ({ title, ...rest }: TitleProps) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            {...rest}
            data-aos="fade-up"
            className="relative my-4 w-full mx-auto text-center text-4xl md:text-5xl vastago-bold"
        >
            {title}
        </div>
    );
};

export default Title;
