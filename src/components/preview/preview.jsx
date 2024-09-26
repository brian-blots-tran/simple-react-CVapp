import './preview.css';
function Preview({ data }) {
  return (
    <div id='preview'>
      <div id='preview-page'>
        <div className='' id='preview-header'>
          <div className=''>{data.Header.name}</div>
          <div className=''>{data.Header.occupation}</div>
          <div className=''> {data.Header.summary}</div>
        </div>
        <div className='' id='preview-experience'>
          <div className=''>{data.Experience.date}</div>
          <div className=''>{data.Experience.title}</div>
          <div className=''> {data.Experience.company}</div>
          <div className=''> {data.Experience.description}</div>
        </div>
        <div className='' id='preview-education'>
          <div className=''>{data.Education.degree}</div>
          <div className=''>{data.Education.institution}</div>
        </div>
        <div className='' id='preview-achievements'>
          <div className=''>{data.Achievements.title}</div>
          <div className=''>{data.Achievements.description}</div>
        </div>
        <div className='' id='preview-projects'>
          <div className=''>{data.Projects.title}</div>
          <div className=''>{data.Projects.description}</div>
        </div>
        <div className='' id='preview-other'>
          <div className=''>{data.Other}</div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
