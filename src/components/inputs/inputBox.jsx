import './inputBox.css';

function InputBox({ label, onChange }) {
  console.log('firing');
  return (
    <div>
      <label>{label}</label>
      <input label={label} onChange={onChange} />
    </div>
  );
}

export default InputBox;
