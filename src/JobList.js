import React from 'react';

function JobList(props) {
  return (
    <li className={'job_li ' + props.job.type}>
      <div className='job_section one'>
        <div className='job_title_container'>
          <h3 className='job_title' title={props.job.title}>{props.job.title}</h3>
          <p className='job_title_info' title='e-book   |   Travel and Tourism   |   400 words'>
            <span>e-book</span>
            <span className='seperator'>|</span>
            <span>Travel and Tourism</span>
            <span className='seperator'>|</span>
            <span>400 words</span>
          </p>
        </div>
        <p className='price_container' title={'₹' + props.job.cost}>₹{props.job.cost}</p>
        <div className='job_label_container'>
          <span className='job_label'>{props.job.label}</span>
        </div>
      </div>
      <div className='job_section two'>
        <p className={'action_info ' + props.job.icon}>
          <span title={props.job.status}>{props.job.status}</span>
        </p>
        <div className={'action_button' + (props.job.action == 'view' ? '' : ' main')}>{props.job.action}</div>
      </div>
      <div className='clear'></div>
    </li>
  );
}

export default JobList;
