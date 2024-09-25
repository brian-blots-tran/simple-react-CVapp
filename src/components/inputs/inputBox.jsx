import './inputBox.css';

function InputBox({ label, value, onChange }) {
  console.log(onChange);
  return (
    <div>
      <label>{label}</label>
      <input label={label} value={value} onChange={onChange} />
    </div>
  );
}

export default InputBox;
