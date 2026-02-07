import './App.css'

const Hello = (props) => {
    return (
        <div>
            <p>Hello World! This is {props.name}</p>
        </div>
    )
}

const App = () => {
    console.log("This is the first console log!")
    const now = new Date()
    const a = 10
    const b = 20
    console.log(now, a+b)

    const family = [
        {name : 'Vineeth', age : 28},
        {name : 'Toksh', age : 26}
    ]
    return (
        <div>
            <p>This is first App!</p>
            <p>It is {now.toString()}</p>
            <p> {a} + {b} is {a+b}</p>
            <Hello name = "Vineeth"/>
            <Hello name = "Vineeth!"/>
            <Hello name = "Vineeth!!"/>
            <p>This is {family[0].name} who is {family[0].age} years old</p>
            <p>This is his wife {family[1].name} who is {family[1].age} years old</p>

        </div>
    )
}

export default App
