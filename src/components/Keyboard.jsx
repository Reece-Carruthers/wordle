export default function Keyboard() {

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
                                    className="p-5 m-1 sm:m-2 bg-neutral-900 rounded-md drop-shadow-md text-white"
                                    value={letter}
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