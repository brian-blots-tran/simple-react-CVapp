//css
import "./form.css";
import InputArea from "../inputs/inputArea";
import InputBox from "../inputs/inputBox";
import SubForm from "../subForm/subForm";
import { useState } from "react";
function Form() {
  const [formData, setFormData] = useState({
    Header: { name: "", occupation: "", summary: "" },
    Experience: { date: "", title: "", company: "", description: "" },
    Education: { degree: "", institution: "" },
    Achievements: { title: "", description: "" },
    Projects: { title: "", description: "" },
    Other: "",
  });

  function handleChangeHeader(e) {
    switch (e.target.attributes.label.value) {
      case "Summary":
        setFormData({
          ...formData,
          Header: { ...formData.Header, summary: e.target.value },
        });
        break;
      case "Name":
        setFormData({
          ...formData,
          Header: { ...formData.Header, name: e.target.value },
        });
        break;
      case "Occupation":
        setFormData({
          ...formData,
          Header: { ...formData.Header, occupation: e.target.value },
        });
        break;
      default:
        return;
    }
  }

  function handleChangeExperience(e) {
    switch (e.target.attributes.label.value) {
      case "Date":
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, dateRange: e.target.value },
        });
        break;
      case "Title":
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, title: e.target.value },
        });
        break;
      case "Company":
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, company: e.target.value },
        });
        break;
      case "Description":
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, description: e.target.value },
        });
        break;
      default:
        return;
    }
  }

  function handleChangeEducation(e) {
    switch (e.target.attributes.label.value) {
      case "Degree":
        setFormData({
          ...formData,
          Education: { ...formData.Education, degree: e.target.value },
        });
        break;
      case "Institution":
        setFormData({
          ...formData,
          Education: { ...formData.Education, institution: e.target.value },
        });
        break;
      default:
        return;
    }
  }

  function handleChangeAchievements(e) {
    switch (e.target.attributes.label.value) {
      case "Title":
        setFormData({
          ...formData,
          Achievements: { ...formData.Achievements, title: e.target.value },
        });
        break;
      case "Description":
        setFormData({
          ...formData,
          Achievements: {
            ...formData.Achievements,
            description: e.target.value,
          },
        });
        break;
      default:
        return;
    }
  }

  function handleChangeProjects(e) {
    switch (e.target.attributes.label.value) {
      case "Title":
        setFormData({
          ...formData,
          Projects: { ...formData.Projects, title: e.target.value },
        });
        break;
      case "Description":
        setFormData({
          ...formData,
          Projects: { ...formData.Projects, description: e.target.value },
        });
        break;
      default:
        return;
    }
  }
  function handleChangeOther(e) {
    setFormData({
      ...formData,
      Other: e.target.value,
    });
  }
  return (
    <>
      <div id="form">
        {/*<div className='form-section' id='header'>
          <h1 className='form-section-heading'>Header</h1>
          <InputBox label={'Name'} onChange={handleChangeHeader} />
          <InputBox label={'Occupation'} onChange={handleChangeHeader} />
          <InputArea label={'Summary'} onChange={handleChangeHeader} />
        </div>
        <div className='form-section' id='experience'>
          <h1 className='form-section-heading'>Experience</h1>
          <InputBox label={'Date'} onChange={handleChangeExperience} />
          <InputBox label={'Title'} onChange={handleChangeExperience} />
          <InputBox label={'Company'} onChange={handleChangeExperience} />
          <InputArea label={'Description'} onChange={handleChangeExperience} />
        </div>
        <div className='form-section' id='education'>
          <h1 className='form-section-heading'>Education</h1>
          <InputBox label={'Degree'} onChange={handleChangeEducation} />
          <InputBox label={'Institution'} onChange={handleChangeEducation} />
        </div>
        <div className='form-section' id='achievements'>
          <h1 className='form-section-heading'>Achievements</h1>
          <InputBox label={'Title'} onChange={handleChangeAchievements} />
          <InputArea
            label={'Description'}
            onChange={handleChangeAchievements}
          />
        </div>
        <div className='form-section' id='projects'>
          <h1 className='form-section-heading'>Projects</h1>
          <InputBox label={'Name'} onChange={handleChangeProjects} />
          <InputArea label={'Description'} onChange={handleChangeProjects} />
        </div>
        <div className='form-section' id='other'>
          <h1 className='form-section-heading'>Other</h1>
          <InputArea label={'other'} onChange={handleChangeOther} />
        </div>  */}
        <SubForm object={formData.Experience} head={"Experience"} />
      </div>

      <div id="preview">
        <div className="" id="preview-header">
          <div className="">{formData.Header.name}</div>
          <div className="">{formData.Header.occupation}</div>
          <div className=""> {formData.Header.summary}</div>
        </div>
        <div className="" id="preview-experience">
          <div className="">{formData.Experience.dateRange}</div>
          <div className="">{formData.Experience.title}</div>
          <div className=""> {formData.Experience.company}</div>
          <div className=""> {formData.Experience.description}</div>
        </div>
        <div className="" id="preview-education">
          <div className="">{formData.Education.degree}</div>
          <div className="">{formData.Education.institution}</div>
        </div>
        <div className="" id="preview-achievements">
          <div className="">{formData.Achievements.title}</div>
          <div className="">{formData.Achievements.description}</div>
        </div>
        <div className="" id="preview-projects">
          <div className="">{formData.Projects.title}</div>
          <div className="">{formData.Projects.description}</div>
        </div>
        <div className="" id="preview-other">
          <div className="">{formData.Other}</div>
        </div>
      </div>
    </>
  );
}

export default Form;
