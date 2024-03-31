import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        joiningDate: '',
        department: '',
        designation: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/employee/create', formData);
            alert('Employee created successfully');
            setFormData({ email: '', firstName: '', lastName: '', joiningDate: '', department: '', designation: '' });
        } catch (error) {
            console.error('Error creating employee:', error);
            alert('Error creating employee');
        }
    };

    return (
        <div>
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Joining Date:</label>
                    <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Department:</label>
                    <input type="text" name="department" value={formData.department} onChange={handleChange} required />
                </div>
                <div>
                    <label>Designation:</label>
                    <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
                </div>
                <button type="submit">Create Employee</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
