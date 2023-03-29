export default function TitleText({ title, textStyles }) {

    return <h2
        className={`mt-4 font-bold md:text-[50px] text-[30px] text-white ${textStyles}`}
    >
        {title}

    </h2>

}