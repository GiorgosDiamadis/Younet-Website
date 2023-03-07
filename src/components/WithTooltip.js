export default function WithTooltip({tooltipContent, children,className}) {


    return <>
        <div className={`md:block group cursor-pointer relative inline-block border-b border-gray-400 text-center ${className}`}>
            {children}
            <div
                className="left-1/2  bottom-[120%] w-max max-w-[300px] text-md -translate-x-1/2 opacity-0 bg-black text-white text-center  rounded-lg py-2 absolute z-10 group-hover:opacity-100 transition-opacity duration-300  px-3 pointer-events-none">
                {tooltipContent}
                <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"
                >
                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
                </svg>
            </div>
        </div>
    </>
}