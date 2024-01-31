import Row from "./Row.jsx";

export default function Grid({numberOfGuesses, sizeOfWord}) {

    const gridStyling = `grid grid-cols-${sizeOfWord + 1} grid-rows-${numberOfGuesses}`

    return (
        <>
            <div className={gridStyling}>
                {[...Array(numberOfGuesses).keys()].map((i) => {
                    return (
                        <Row rowNumber={i} sizeOfWord={sizeOfWord} key={i} />
                    )
                })}
            </div>
        </>
    )
}