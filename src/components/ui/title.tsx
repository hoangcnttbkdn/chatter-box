interface TitleProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
}

const Title = ({ title, ...rest }: TitleProps) => {
    return (
        <div
            {...rest}
            className="relative my-4 w-full mx-auto text-center  text-3xl vastago-bold"
        >
            {title}
        </div>
    );
};

export default Title;
