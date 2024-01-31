import Grid from "./Grid.jsx";
import Keyboard from "./Keyboard.jsx";

export default function Wordle({gameSettings}) {
    return (
        <>
            <div className="flex justify-center">
                <Grid numberOfGuesses={gameSettings.numberOfGuesses} sizeOfWord={gameSettings.sizeOfWord}/>
            </div>
            <div className="flex justify-center">
                <Keyboard />
            </div>
        </>
    )
}