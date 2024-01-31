/**
 * Wordle requirments
 *
 * 5 chances to guess a five letter word
 * If letter is in word and in correct position, letter is green
 * If letter is in word but in wrong position, letter is yellow
 *
 * @returns {JSX.Element}
 * @constructor
 */
import Wordle from "./components/Wordle.jsx";
import Banner from "./components/Banner.jsx";

function App() {

    const gameSettings = {
        numberOfGuesses: 6,
        sizeOfWord: 5
    }

    return (
        <>
            <Banner />
            <Wordle gameSettings={gameSettings} />
        </>
    )
}

export default App
