import Row from "./Row.jsx";

export default function Grid({numberOfGuesses, sizeOfWord}) {

    return (
        <>
            <div className="flex flex-col">
                {[...Array(numberOfGuesses).keys()].map((i) => {
                    return (
                        <Row rowNumber={i} sizeOfWord={sizeOfWord} key={i} />
                    )
                })}
            </div>
        </>
    )
}