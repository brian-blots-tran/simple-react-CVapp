import './subForm.css';
import InputArea from '../inputs/inputArea';
import InputBox from '../inputs/inputBox';

function SubForm({ object, heading, onChange }) {
  return (
    <div className='form-section'>
      <h1 className='form-section-heading'>{heading}</h1>
      {Object.keys(object).map((key, i) => {
        return key == 'description' || key == 'summary' ? (
          <InputArea label={key} key={i} onChange={onChange} />
        ) : (
          <InputBox label={key} key={i} onChange={onChange} />
        );
      })}
    </div>
  );
}

export default SubForm;
