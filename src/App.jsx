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

function App() {

    return (
        <>
            <Wordle />
        </>
    )
}

export default App
