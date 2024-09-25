import "./subForm.css";
import InputArea from "../inputs/inputArea";
import InputBox from "../inputs/inputBox";
import { useState } from "react";

function SubForm({ object, head }) {
  const [objectState, setObjectState] = useState(object);
  console.log(object);
  //   function onChange(e) {
  //     for (let key in objectState) {
  //       if (e.target.attributes.label.value == key) {
  //         setObjectState(...objectState, (objectState[key] = e.target.value));
  //       }
  //     }
  //   }

  return (
    <div className="form-section">
      <h1 className="form-section-heading">{head}</h1>
      {Object.keys(objectState).map((key, i) => {
        return key == "description" || key == "summary" ? (
          <InputArea label={key} key={i} />
        ) : (
          <InputBox label={key} key={i} />
        );
      })}
    </div>
  );
}

export default SubForm;
