import React, { useState } from 'react'

export const ControllerComponent = () => {

    const [name, setName] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [gender, setGender] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()

        const form = { name, isActive, gender }
        console.log(form)
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
            <label>
                Name: <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            <br />
            <label>
                Active: <input type="checkbox" checked={isActive} onChange={event => setIsActive(event.target.checked)} />
            </label>
            <br />
            <label>
                Gender: <input type="radio" checked={gender === 0} onChange={event => setGender(0)} /> Male
                <input type="radio" checked={gender === 1} onChange={event => setGender(1)} /> Female
            </label>
            <br />
            <input type='submit' />
        </form>
    )
}
