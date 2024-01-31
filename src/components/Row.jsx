export default function Row({ rowNumber , sizeOfWord}) {

    const buttonStyling = "p-5 m-1 sm:m-2 bg-neutral-400 rounded-md drop-shadow-md"

    return (
        <>
            <div id={"row-"+rowNumber} className="flex flex-row">
                {[...Array(sizeOfWord).keys()].map((i) => {
                    return (
                        <button className={buttonStyling} key={i}>
                            {rowNumber}
                        </button>
                    )
                })}
            </div>
        </>
    )
}