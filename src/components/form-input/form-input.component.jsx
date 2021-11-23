import React from "react";

import './form-input.styles.scss'

const FormInput =({handleChange, label, ...everythingElse}) => (
    <div className='group'>
        <input className='form-input' 
            onChange={handleChange} 
            {...everythingElse}/>
        {
            label ?
            (<label className={`${everythingElse.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
        
        
    </div>
)

export default FormInput;