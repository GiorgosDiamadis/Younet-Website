const SectionTitle = ({title, subTitle, textAlign = 'text-center', glow = 'white', size = '90px'}) => {
    return <div
        className={'800px:px-0 px-5'}
    >
        {subTitle && <div className={`${textAlign}`}>
            <span

                className={`text-white  text-center text-sm sm:text-xl lg:text-2xl  font-bold mr-1 inline-block`}>{subTitle}</span>
        </div>}


        <p className={`mb-0 ${glow === 'blue' ? 'text-glow-blue' : ""}  ${textAlign} heading text-[70px] `}>{title}</p>
    </div>
}

export default SectionTitle
