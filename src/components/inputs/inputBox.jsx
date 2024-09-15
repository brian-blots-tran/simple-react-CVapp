import './inputBox.css';

function InputBox({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input label={label} value={value} onChange={onChange} />
    </div>
  );
}

export default InputBox;
