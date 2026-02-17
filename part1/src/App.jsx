import {useState} from 'react'

const Display = (props) => {
    return (
        <div>
            {props.counter}
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}> {props.text} </button>
    )
}

const App =() => {
    const [left, leftClick] = useState(0)
    const [right, rightClick] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        leftClick(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        rightClick(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>
                left click
            </button>
            <button onClick={handleRightClick}>
                right click
            </button>
            {right}
            <p>{allClicks.join('')}</p>
        </div>
    )
}

// const App = () => {
//     const [counter, setCounter] = useState(0)
//
//     const increaseCounter = () => setCounter(counter + 1)
//
//     const decreaseCounter = () => setCounter(counter - 1)
//
//     const resetCounter = () => setCounter(0)
//
//
//     return (
//         <div>
//             <Display counter = {counter}/>
//             <Button onClick = {decreaseCounter} text = 'Minus'/>
//             <Button onClick = {resetCounter} text = 'Reset'/>
//             <Button onClick = {increaseCounter} text = 'Plus'/>
//         </div>
//     )
// }

export default App


/*
*******************  Syntax  *********************
* setTimeout(() => setCounter(counter + 1), 1000)  for invoke function callback in par1 every par2 seconds
* <button onClick={handleClick}>Click</button>
 */
