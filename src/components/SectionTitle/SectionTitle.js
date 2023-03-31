const SectionTitle = ({ title, subTitle, size = 'lg' }) => {
    return <div
        className={'800px:px-0 px-5'}
    >
        {subTitle && <div className='text-center'>
            <span

                className={'text-white text-center text-sm sm:text-xl lg:text-2xl  font-bold mr-1 inline-block'}>{subTitle}</span>
        </div>}


        <p className={`mb-0 heading ${size === 'md' ? 'text-5xl' : ''} `}>{title}</p>
    </div>
}

export default SectionTitle
