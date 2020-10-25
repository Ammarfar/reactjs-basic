import React, { useRef } from 'react'

export const UncontrolledComponents = () => {

    const name = useRef(null)

    const handleSubmit = event => {
        event.preventDefault()

        alert(name.current.value)
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
            <label>
                Name: <input type="text" ref={name} defaultValue='Ammar' />
            </label>
            <input type='submit' />
        </form>
    )
}
