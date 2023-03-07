export default function Burger(props) {
    return <>
        <div className="burger">
            <span {...props} className="burger-line"></span>
            <span {...props} className="burger-line"></span>
            <span {...props} className="burger-line"></span>
        </div>
        <div {...props} className={'menu-x-close'}></div>
    </>
}