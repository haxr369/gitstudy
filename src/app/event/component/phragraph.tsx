interface PhragraphInterface {
    title: string
    pharagraph1: string
    pharagraph2: string[]
    pharagraph3: string[]
}
const Phragraph = (props: PhragraphInterface) => {
    const { title, pharagraph1, pharagraph2, pharagraph3 } = props
    return (
        <>
            <div>{title}</div>
            <div>{pharagraph1}</div>
            <div>{pharagraph2}</div>
            <div>{pharagraph3}</div>
        </>
    )
}

export default Phragraph
