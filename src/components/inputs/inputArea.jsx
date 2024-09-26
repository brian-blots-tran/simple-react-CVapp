import './inputArea.css';
function InputArea({ label, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <textarea label={label} onChange={onChange}></textarea>
    </div>
  );
}
export default InputArea;
