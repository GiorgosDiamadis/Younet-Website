export default function CallToAction({
                                         children, onClick = () => {
    }, ...rest
                                     }) {

    return <div {...rest} onClick={onClick}>{children}</div>
}