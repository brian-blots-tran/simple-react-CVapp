import './inputArea.css';
function InputArea({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <textarea label={label} value={value} onChange={onChange}></textarea>
    </div>
  );
}
export default InputArea;
