export default function Row({ rowNumber , sizeOfWord}) {

    const buttonStyling = "p-5 m-5 bg-neutral-400 p-5 rounded-md drop-shadow-md"

    return (
        <>
            <div id={"row-"+rowNumber}>
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