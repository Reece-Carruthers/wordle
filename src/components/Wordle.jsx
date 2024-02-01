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
        word: "zebra"
    })

    const updateGuessCoordinates = () => {

        const currentRowIndex = gameState.currentGuess[0]
        const currentBoxIndex = gameState.currentGuess[1]
        const endOfRow = (currentBoxIndex) => {
            return currentBoxIndex === gameSettings.sizeOfWord - 1
        }
        const endOfGame = (currentBoxIndex, currentRowIndex) => {
            return currentRowIndex === gameSettings.numberOfGuesses - 1 && currentBoxIndex === gameSettings.sizeOfWord - 1
        }

        if(endOfGame(currentBoxIndex, currentRowIndex)) {
            console.log("end of game")
        } else if(endOfRow(currentBoxIndex)) {
            setGameState({
                ...gameState,
                currentGuess: [currentRowIndex + 1, 0]
            })
        }else {
            setGameState({
                ...gameState,
                currentGuess: [currentRowIndex, currentBoxIndex + 1]
            })
        }
    }

    const assignGuessToRowBox = (guess) => {
        const newRows = rows.map(row => {
            return {...row, props: {...row.props, rowBoxes: row.props.rowBoxes.map(box => ({...box}))}}
        })

        const currentRowIndex = gameState.currentGuess[0]
        const currentBoxIndex = gameState.currentGuess[1]
        newRows[currentRowIndex].props.rowBoxes[currentBoxIndex] = <RowBox key={currentBoxIndex} value={guess} />

        setRows(newRows)
        updateGuessCoordinates()
    }

    return (
        <>
            <div className="flex justify-center">
                <Grid rows={rows}/>
            </div>
            <div className="flex justify-center mt-5">
                <Keyboard setGuess={assignGuessToRowBox}/>
            </div>
        </>
    )
}