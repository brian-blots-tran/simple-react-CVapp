//css
import './form.css';
import InputArea from '../inputs/inputArea';
import SubForm from '../subForm/subForm';

function Form({ data, handleData }) {
  function handleChangeHeader(e) {
    switch (e.target.attributes.label.value) {
      case 'summary':
        handleData({
          ...data,
          Header: { ...data.Header, summary: e.target.value },
        });
        break;
      case 'name':
        handleData({
          ...data,
          Header: { ...data.Header, name: e.target.value },
        });
        break;
      case 'occupation':
        handleData({
          ...data,
          Header: { ...data.Header, occupation: e.target.value },
        });
        break;
      default:
        break;
    }
  }
  function handleChangeExperience(e) {
    switch (e.target.attributes.label.value) {
      case 'date':
        handleData({
          ...data,
          Experience: { ...data.Experience, date: e.target.value },
        });
        break;
      case 'title':
        handleData({
          ...data,
          Experience: { ...data.Experience, title: e.target.value },
        });
        break;
      case 'company':
        handleData({
          ...data,
          Experience: { ...data.Experience, company: e.target.value },
        });
        break;
      case 'description':
        handleData({
          ...data,
          Experience: { ...data.Experience, description: e.target.value },
        });
        break;
      default:
        break;
    }
  }

  function handleChangeEducation(e) {
    console.log('Changing Education Data');
    switch (e.target.attributes.label.value) {
      case 'degree':
        handleData({
          ...data,
          Education: { ...data.Education, degree: e.target.value },
        });
        break;
      case 'institution':
        handleData({
          ...data,
          Education: { ...data.Education, institution: e.target.value },
        });
        break;
      default:
        break;
    }
  }

  function handleChangeAchievements(e) {
    switch (e.target.attributes.label.value) {
      case 'title':
        handleData({
          ...data,
          Achievements: { ...data.Achievements, title: e.target.value },
        });
        break;
      case 'description':
        handleData({
          ...data,
          Achievements: {
            ...data.Achievements,
            description: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  }

  function handleChangeProjects(e) {
    switch (e.target.attributes.label.value) {
      case 'title':
        handleData({
          ...data,
          Projects: { ...data.Projects, title: e.target.value },
        });
        break;
      case 'description':
        handleData({
          ...data,
          Projects: { ...data.Projects, description: e.target.value },
        });
        break;
      default:
        break;
    }
  }
  function handleChangeOther(e) {
    handleData({
      ...data,
      Other: e.target.value,
    });
  }
  return (
    <>
      <div id='form'>
        <SubForm
          object={data.Header}
          heading={'Intro'}
          onChange={handleChangeHeader}
        />
        <SubForm
          object={data.Experience}
          heading={'Experience'}
          onChange={handleChangeExperience}
        />
        <SubForm
          object={data.Education}
          heading={'Education'}
          onChange={handleChangeEducation}
        />
        <SubForm
          object={data.Achievements}
          heading={'Achievements'}
          onChange={handleChangeAchievements}
        />
        <SubForm
          object={data.Projects}
          heading={'Projects'}
          onChange={handleChangeProjects}
        />
        <div className='form-section' id='other'>
          <h1 className='form-section-heading'>Other</h1>
          <InputArea label={'other'} onChange={handleChangeOther} />
        </div>
      </div>
    </>
  );
}

export default Form;
