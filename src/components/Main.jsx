import { useState } from 'react'
import Card from "../Card"


function Main(){

    const userName = "Flo"
    const userStyle = {
    display: "inline",
    color: "blue"
    }

    const [count, setCount] = useState(0)
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const logNumbers = numbers.map(num => <Card num = {num}/>)
    console.log(logNumbers)


    return(
        <div className='main-content'>
            <h1 className='h1' style={userStyle}>Welcome, {userName}</h1>
            {logNumbers}
            <ol>
                <li>So that I can use React in building websites and webapps</li>
                <li>So that I can be of use to team members</li>
            </ol>
        </div>
    )
}

export default Main