import './preview.css';
function Preview({ data }) {
  return (
    <div id='preview'>
      <div id='preview-page'>
        <div className='' id='preview-header'>
          <div className=''>{data.Header.name}</div>
          <div className=''>{data.Header.email}</div>
          <div className=''> {data.Header.contact}</div>
        </div>
        <div className='break-line'></div>
        <div className='' id='preview-experience'>
          <h1 className='preview-heading'>Experience</h1>
          <div className=''>
            {data.Experience.date} {data.Experience.title}{' '}
            {data.Experience.company}
          </div>
          <div className=''> {data.Experience.description}</div>
        </div>
        <div className='break-line'></div>
        <div className='' id='preview-education'>
          <h1 className='preview-heading'>Education</h1>
          <div className=''>
            {data.Education.degree} {data.Education.institution}
          </div>
        </div>
        <div className='break-line'></div>
        <div className='' id='preview-achievements'>
          <h1 className='preview-heading'>Achievements</h1>
          <div className=''>{data.Achievements.title}</div>
          <div className=''>{data.Achievements.description}</div>
        </div>
        <div className='break-line'></div>
        <div className='' id='preview-projects'>
          <h1 className='preview-heading'>Projects</h1>
          <div className=''>{data.Projects.title}</div>
          <div className=''>{data.Projects.description}</div>
        </div>
        <div className='break-line'></div>
        <div className='' id='preview-other'>
          <div className=''>{data.Other}</div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
