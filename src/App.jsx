import './App.css';
import Form from './components/form/form.jsx';
import { useState } from 'react';
import Preview from './components/preview/preview.jsx';
function App() {
  const [data, setData] = useState({});
  function handleData(formData) {
    setData(formData);
  }
  return (
    <>
      <Form handleData={handleData}></Form>
      <Preview data={data}></Preview>
    </>
  );
}

export default App;
