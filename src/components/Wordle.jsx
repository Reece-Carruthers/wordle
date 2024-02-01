import Grid from "./Grid.jsx";
import Keyboard from "./Keyboard.jsx";
import {useState} from "react";
import Row from "./Row.jsx";
import RowBox from "./RowBox.jsx";

export default function Wordle({gameSettings}) {

    const rowBoxes = [...Array(gameSettings.sizeOfWord).keys()].map((i) => {
        return (
            <RowBox key={i} value={""} />
        )
    })

    const [rows, setRows] = useState([...Array(gameSettings.numberOfGuesses).keys()].map((i) => {
        return (
            <Row key={i} rowBoxes={rowBoxes}/>
        )
    }))

    const [gameState, setGameState] = useState({
        currentGuess: [0, 0],
        word: "zebra",
        guess: "",
    })

    const setGuess = (guess) => {
        setGameState({...gameState, guess: guess})
    }

    return (
        <>
            <div className="flex justify-center">
                <Grid rows={rows}/>
            </div>
            <div className="flex justify-center mt-5">
                <Keyboard setGuess={setGuess}/>
            </div>
        </>
    )
}