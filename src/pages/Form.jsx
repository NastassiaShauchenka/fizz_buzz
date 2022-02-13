import React, { useEffect, useState } from 'react'
import { formDataFields } from '../formDataFields'
import CardFooter from '../components/CardFooter'

export const storageName = 'formdata'

const FormPage = ({ setLocalStorageData }) => {

    const initialState = {}
    formDataFields.map(field => initialState[field.name] = null)
    const [formData, setFormData] = useState({ ...initialState })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && formDataFields.filter(key => formDataFields.find(field => field.name === key).required).every(field => data[field.name]))
            setLocalStorageData({ ...data })
    }, [])

    useEffect(() => {
        const requiredFieldsPresent = Object.keys(formData)
            .filter(key => formDataFields.find(field => field.name === key).required)
            .every(key => formData[key])
        
        const isIntegerValid = formData.integer ? formDataFields.find(field => field.name === 'integer').regex.test(formData.integer) : false

        setIsSubmitDisabled(!requiredFieldsPresent || !isIntegerValid)
    }, [formData])

    const inputChangeHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const submitHandler = () => {
        try {
            localStorage.setItem(storageName, JSON.stringify({ ...formData }))
            setLocalStorageData({ ...formData })
        } catch (err) { }
    }

    return (
        <div className='row'>
            <div className='col s12 m8 offset-m2'>
                <h1>Fizz Buzz</h1>
                <div className="card teal lighten-4">
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                {formDataFields.map((field, i) => (
                                    <div className="row" key={i} >
                                        <div className="input-field col s12" style={{ 'paddingTop': '11.25px' }}>
                                            <input
                                                id={field.name}
                                                name={field.name}
                                                type={field.type || 'text'}
                                                onChange={inputChangeHandler}
                                            >
                                            </input>
                                            <label
                                                className="active"
                                                htmlFor={field.name}
                                            >
                                                {field.label} {field.required && "(required)"}
                                            </label>
                                            <span className="helper-text" data-error="wrong" data-success="right">{field.helperText}</span>
                                        </div>
                                    </div>
                                )
                                )
                                }
                            </form>
                        </div>
                    </div>
                    <CardFooter
                        btnFunction={submitHandler}
                        disabled={isSubmitDisabled}
                    />
                </div>
            </div>
        </div>
    )

}

export default FormPage