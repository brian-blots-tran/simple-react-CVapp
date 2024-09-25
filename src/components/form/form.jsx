//css
import './form.css';
import InputArea from '../inputs/inputArea';
import SubForm from '../subForm/subForm';
import { useState } from 'react';
function Form() {
  const [formData, setFormData] = useState({
    Header: { name: '', occupation: '', summary: '' },
    Experience: { date: '', title: '', company: '', description: '' },
    Education: { degree: '', institution: '' },
    Achievements: { title: '', description: '' },
    Projects: { title: '', description: '' },
    Other: '',
  });

  function handleChangeHeader(e) {
    switch (e.target.attributes.label.value) {
      case 'summary':
        setFormData({
          ...formData,
          Header: { ...formData.Header, summary: e.target.value },
        });
        break;
      case 'name':
        console.log('Name Changing');
        setFormData({
          ...formData,
          Header: { ...formData.Header, name: e.target.value },
        });
        break;
      case 'occupation':
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
      case 'date':
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, dateRange: e.target.value },
        });
        break;
      case 'title':
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, title: e.target.value },
        });
        break;
      case 'company':
        setFormData({
          ...formData,
          Experience: { ...formData.Experience, company: e.target.value },
        });
        break;
      case 'description':
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
      case 'degree':
        setFormData({
          ...formData,
          Education: { ...formData.Education, degree: e.target.value },
        });
        break;
      case 'institution':
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
      case 'title':
        setFormData({
          ...formData,
          Achievements: { ...formData.Achievements, title: e.target.value },
        });
        break;
      case 'description':
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
      case 'title':
        setFormData({
          ...formData,
          Projects: { ...formData.Projects, title: e.target.value },
        });
        break;
      case 'description':
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
      <div id='form'>
        <SubForm
          object={formData.Header}
          heading={'Intro'}
          onChange={handleChangeHeader}
        />
        <SubForm
          object={formData.Experience}
          heading={'Experience'}
          onchange={handleChangeExperience}
        />
        <SubForm
          object={formData.Education}
          heading={'Education'}
          onchange={handleChangeEducation}
        />
        <SubForm
          object={formData.Achievements}
          heading={'Achievements'}
          onchange={handleChangeAchievements}
        />
        <SubForm
          object={formData.Projects}
          heading={'Projects'}
          onchange={handleChangeProjects}
        />
        <div className='form-section' id='other'>
          <h1 className='form-section-heading'>Other</h1>
          <InputArea label={'other'} onChange={handleChangeOther} />
        </div>
      </div>

      <div id='preview'>
        <div className='' id='preview-header'>
          <div className=''>{formData.Header.name}</div>
          <div className=''>{formData.Header.occupation}</div>
          <div className=''> {formData.Header.summary}</div>
        </div>
        <div className='' id='preview-experience'>
          <div className=''>{formData.Experience.dateRange}</div>
          <div className=''>{formData.Experience.title}</div>
          <div className=''> {formData.Experience.company}</div>
          <div className=''> {formData.Experience.description}</div>
        </div>
        <div className='' id='preview-education'>
          <div className=''>{formData.Education.degree}</div>
          <div className=''>{formData.Education.institution}</div>
        </div>
        <div className='' id='preview-achievements'>
          <div className=''>{formData.Achievements.title}</div>
          <div className=''>{formData.Achievements.description}</div>
        </div>
        <div className='' id='preview-projects'>
          <div className=''>{formData.Projects.title}</div>
          <div className=''>{formData.Projects.description}</div>
        </div>
        <div className='' id='preview-other'>
          <div className=''>{formData.Other}</div>
        </div>
      </div>
    </>
  );
}

export default Form;
