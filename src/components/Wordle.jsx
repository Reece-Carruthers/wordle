import Grid from "./Grid.jsx";

export default function Wordle({gameSettings}) {
    return (
        <>
            <div className="flex justify-center mt-5">
                <Grid numberOfGuesses={gameSettings.numberOfGuesses} sizeOfWord={gameSettings.sizeOfWord}/>
            </div>
        </>
    )
}