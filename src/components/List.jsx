import React from 'react'
import { formDataFields } from '../formDataFields'

const List = ({ data }) => {
    return (
        <ul className="collection">
            {
                Object.keys(data).map((item, i) => (
                    <li className="collection-item teal lighten-5 mleft-align center" key={i} style={{ marginTop: '.5rem' }}>
                        {formDataFields.find(field => field.name === item).label} : {data[item] ? data[item] : "N/A"}
                    </li>
                ))
            }
        </ul>
    )
}

export default List


