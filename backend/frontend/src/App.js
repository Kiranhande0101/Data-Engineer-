import React from 'react';
import DepartmentForm from './components/DepartmentForm';
import EmployeeForm from './components/EmployeeForm';
import PayoutUploadForm from './components/PayoutUploadForm';

const App = () => {
  return (
    <div>
      <h1>Company Management System</h1>
      <DepartmentForm />
      <EmployeeForm />
      <PayoutUploadForm />
    </div>
  );
};

export default App;
