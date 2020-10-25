import React from 'react'

export const InputText = ({ label, value, onChange }) => {
    return (
        <div>
            <label>
                {label}: <input value={value} onChange={onChange} />
            </label>
        </div>
    )
}
