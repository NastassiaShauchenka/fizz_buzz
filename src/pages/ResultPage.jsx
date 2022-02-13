import React from 'react'
import { useNavigate } from 'react-router'
import CardFooter from '../components/CardFooter'
import List from '../components/List'
import { storageName } from './Form'

const ResultPage = ({ localStorageData, setLocalStorageData }) => {

    const navigate = useNavigate()
    const { integer } = localStorageData
    let divisionResult;

    const isDivisibleByThree = str => {
        const sumOfNumDigits = str.split('').reduce((a, b) => Number(a) + Number(b), 0)
        
        if (sumOfNumDigits.length > 6) {
            isDivisibleByThree(sumOfNumDigits)
        }

        return sumOfNumDigits % 3 === 0
    }

    const getDivisionResult = integer => {
        // a number ends with 0 or 5
        const divisibleByFive = (integer[integer.length - 1] === '0' || integer[integer.length - 1] === '5')
        // sum of num's digits is divisible by 3
        const divisibleByThree = isDivisibleByThree(integer)

        if (divisibleByFive && divisibleByThree)
            return 'fizzbuzz'
        if (divisibleByFive)
            return 'buzz'
        if (divisibleByThree)
            return 'fizz'

        return ''
    }

    if (integer) {
        divisionResult = getDivisionResult(integer)
    } else {
        // error banner ?
    }

    const backHandler = event => {
        localStorage.removeItem(storageName)
        setLocalStorageData(null)
        navigate('/form')
    }

    return (
        <div className='row'>
            <div className='col s12 m8 offset-m2'>
                <h1>FizzBuzz Results</h1>
                <div className="card teal lighten-4">
                    <div className="card-content">
                        <div className="row">
                            <List data={localStorageData} />
                        </div>
                        <div className="card-action center lime accent-2">
                            <p>{divisionResult}</p>
                        </div>
                    </div>
                    <CardFooter btnFunction={backHandler} btnLabel='Back to Form' /> 
                </div>
            </div>
        </div >
    )

}

export default ResultPage