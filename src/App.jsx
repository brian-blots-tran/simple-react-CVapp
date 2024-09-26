import './App.css';
import Form from './components/form/form.jsx';
import { useState } from 'react';
import Preview from './components/preview/preview.jsx';
function App() {
  const [data, setData] = useState({
    Header: { name: '', occupation: '', summary: '' },
    Experience: { date: '', title: '', company: '', description: '' },
    Education: { degree: '', institution: '' },
    Achievements: { title: '', description: '' },
    Projects: { title: '', description: '' },
    Other: '',
  });

  function handleData(formData) {
    setData(formData);
  }

  return (
    <>
      <Form data={data} handleData={handleData}></Form>
      <Preview data={data}></Preview>
    </>
  );
}

export default App;
