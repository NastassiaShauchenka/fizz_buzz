import React from 'react'

const CardFooter = ({btnFunction, btnLabel = 'Submit', disabled = false}) => {
    return (
        <div className="card-action">
                        <button
                            className='btn btn-block light-blue darken-3'
                            style={{ width: '100%' }}
                            href="#"
                            onClick={btnFunction}
                            disabled={disabled}
                            >{btnLabel}</button>
                    </div>
    )
}

export default CardFooter