export default function Keyboard({setGuess}) {

    const keyboardLetters = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]

    return (
        <>
            <div className="flex flex-col items-center">
                {keyboardLetters.map((letterGroup, index) => {
                    return (
                        <div key={index}>
                    {letterGroup.map((letter) => {
                        return (
                            <button key={letter}
                                    className="p-3 m-1 sm:p-5 bg-neutral-900 rounded-md drop-shadow-md text-white text-xs sm:text-base"
                                    value={letter}
                                    onClick={(e) => {
                                        setGuess(e.target.value)
                                    }}
                            >
                                {letter}
                            </button>
                        )
                    })}
                    </div>
                    )
                })}
            </div>
        </>
    )
}