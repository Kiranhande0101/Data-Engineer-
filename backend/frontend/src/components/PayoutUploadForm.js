import React, { useState } from 'react';
import axios from 'axios';

const PayoutUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('csvFile', selectedFile);
        try {
            await axios.post('/api/payout/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Payouts uploaded successfully');
            setSelectedFile(null);
        } catch (error) {
            console.error('Error uploading payouts:', error);
            alert('Error uploading payouts');
        }
    };

    return (
        <div>
            <h2>Upload Payouts</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" onChange={handleFileChange} required />
                </div>
                <button type="submit">Upload Payouts</button>
            </form>
        </div>
    );
};

export default PayoutUploadForm;
