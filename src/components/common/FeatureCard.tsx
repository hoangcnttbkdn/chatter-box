function FeatureCard({ content, title }: { title: string; content: string }) {
    return (
        <div className="feature-card">
            <span></span>
            <div className="content flex flex-col bg-black z-40">
                <b className="text-sm">{title}: </b>
                <div className="text-sm">{content}</div>
            </div>
        </div>
    );
}

export default FeatureCard;
