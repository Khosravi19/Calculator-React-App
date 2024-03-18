import { useState } from "react"
import "./Calculator.css"
import { evaluate } from "mathjs"

function Calculator(){

    let [result , setResult] = useState('')
    let [incDot , setIncDot] = useState(false)

    let operators = ['+' , '-' , '×' , '÷']

    const symbolReplace = (input) => {
        if (input === '÷') return '/'
        if (input === '×') return '*'
        return input;
    }

    const clickH = (event) => {
        
        if(symbolReplace(event.target.innerText) === ".") {
            if(incDot === true) return
            else setIncDot(true)
        }

        if(operators.includes(event.target.innerText)){
            setIncDot(false)
        }
        setResult(result + symbolReplace(event.target.innerText))
    }

    const clearBtn = () => {
        setResult('')
        setIncDot(false)
    }

    const bSpaceBtn = () => {
        setResult(result.slice(0 , -1))

        if(result.endsWith('.'))
        setIncDot(false)
    }

    const equalBtn = () => {
        setResult(evaluate(result).toString())
        setIncDot(false)
    }


    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={clearBtn} className="symbol col-2">Clear</button>
                <button onClick={bSpaceBtn} className="symbol">&#11148;</button>
                <button onClick={clickH} className="symbol">÷</button>
                <button onClick={clickH}>7</button>
                <button onClick={clickH}>8</button>
                <button onClick={clickH}>9</button>
                <button onClick={clickH} className="symbol">×</button>
                <button onClick={clickH}>4</button>
                <button onClick={clickH}>5</button>
                <button onClick={clickH}>6</button>
                <button onClick={clickH} className="symbol">-</button>
                <button onClick={clickH}>1</button>
                <button onClick={clickH}>2</button>
                <button onClick={clickH}>3</button>
                <button onClick={clickH} className="symbol">+</button>
                <button onClick={clickH}>00</button>
                <button onClick={clickH}>0</button>
                <button onClick={clickH}>.</button>
                <button onClick={equalBtn} className="symbol">=</button>
            </div>
        </div>
    )
}

export default Calculator;