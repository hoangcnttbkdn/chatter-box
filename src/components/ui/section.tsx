import Title from './title';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children?: React.ReactNode;
    customClassName?: string;
    customContentClass?: string;
}

const Section = ({
    title,
    children,
    customClassName,
    customContentClass,
    ...rest
}: SectionProps) => {
    return (
        <section
            className={'flex flex-col gap-2 py-4 md:py-20 ' + customClassName}
            {...rest}
        >
            {title && <Title title={title} className="relative" />}
            <div className={'mt-4 ' + customContentClass}>{children}</div>
        </section>
    );
};

export default Section;
