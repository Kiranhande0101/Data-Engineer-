import React, { useState } from 'react';
import axios from '../service';

const DepartmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        duties: '',
        startDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/department/create', formData);
            alert('Department created successfully');
            setFormData({ name: '', duties: '', startDate: '' });
        } catch (error) {
            console.error('Error creating department:', error);
            alert('Error creating department');
        }
    };

    return (
        <div>
            <h2>Create Department</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Duties:</label>
                    <textarea name="duties" value={formData.duties} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Start Date:</label>
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
                </div>
                <button type="submit">Create Department</button>
            </form>
        </div>
    );
};

export default DepartmentForm;
