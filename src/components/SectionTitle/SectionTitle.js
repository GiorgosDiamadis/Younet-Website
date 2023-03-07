import styles from './SectionTitle.module.scss';

const SectionTitle = ({title, subTitle, size = 'lg'}) => {
    return <>
        {subTitle && <div className="text-center">
            <span
                className={"text-white text-center text-sm sm:text-xl lg:text-2xl  font-bold mr-1 inline-block"}>{subTitle}</span>
        </div>}


        <p className={`p-1.5 mb-0 heading ${size === "md" ? "text-5xl" : ""} `}>{title}</p>
    </>;
};

export default SectionTitle;
