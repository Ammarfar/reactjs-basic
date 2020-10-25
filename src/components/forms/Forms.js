import React, { useEffect, useState } from 'react'
import { InputText } from './InputText'

export const Forms = () => {

    const [form, setForm] = useState({
        name: '',
        job: '',
        age: '',
    })

    const [error, setError] = useState({
        name: '',
        job: '',
        age: '',
    })

    useEffect(() => {
        if (form.name || form.age || form.job) {
            localStorage.setItem('name', form.name)
            localStorage.setItem('job', form.job)
            localStorage.setItem('age', form.age)
        }

        //clean up
        return function () {
            localStorage.setItem('name', '')
            localStorage.setItem('job', '')
            localStorage.setItem('age', '')
        }
    }, [form])

    useEffect(() => {
        setForm({ name: localStorage.getItem('name'), job: localStorage.getItem('job'), age: localStorage.getItem('age') })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        error ? console.log(error) : console.log(JSON.stringify(form))
    }

    const handleChange = (e, field) => {
        const value = e.target.value
        value.length < 3 ? setError({ ...error, [field]: `${field} minimal 3 karakter` }) : setError({ ...error, [field]: '' })

        setForm({ ...form, [field]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
            {error.name}
            <InputText label='name' value={form.name} onChange={e => handleChange(e, 'name')} />
            {error.job}
            <InputText label='job' value={form.job} onChange={e => handleChange(e, 'job')} />
            {error.age}
            <InputText label='age' value={form.age} onChange={e => handleChange(e, 'age')} />
            <input type='submit' />
        </form>
    )
}
