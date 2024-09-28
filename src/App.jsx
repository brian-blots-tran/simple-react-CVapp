import './App.css';
import Form from './components/form/form.jsx';
import { useState } from 'react';
import Preview from './components/preview/preview.jsx';
function App() {
  const [data, setData] = useState({
    Header: {
      name: 'John Doe',
      email: 'John.Doe@gmail.com',
      contact: 'github.com/JohnDoe',
    },
    Experience: {
      date: '2024',
      title: 'Intern',
      company: 'Some Company',
      description: 'Did something productive.',
    },
    Education: { degree: 'Bachelor', institution: 'A School' },
    Achievements: { title: "Dean's list", description: 'I was favoured' },
    Projects: { title: 'Some Projects', description: 'I did something cool' },
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
