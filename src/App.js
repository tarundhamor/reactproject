import React from 'react';
import JobList from './JobList';
import bell from './images/notification.svg';
import './App.css';

const jobs = [{
  title: 'How to build an e-commerce platform : A step by step guide to be at best',
  cost: '400',
  label: 'Revision Requested',
  status: '2h 13m left',
  icon: 'timer',
  action: 'revise',
  type: 'blue'
},
{
  title: 'How to build an e-commerce platform : A step by step guide to be successfull',
  cost: '800',
  label: 'Editorial Review',
  status: 'Waiting',
  icon: 'timer',
  action: 'view',
  type: 'orange'
},
{
  title: 'How to build an e-commerce platform : A step by step guide to be successfull',
  cost: '400',
  label: 'Completed',
  status: '4.5',
  icon: 'star',
  action: 'view',
  type: 'green'
},
{
  title: 'How to build an e-commerce platform : A step by step guide to be successfull',
  cost: '600',
  label: 'Deadline Missed',
  status: 'NA',
  icon: 'star',
  action: 'view',
  type: 'red'
},
{
  title: 'How to build an e-commerce platform : A step by step guide to be successfull',
  cost: '400',
  label: 'Completed',
  status: '4.5',
  icon: 'star',
  action: 'view',
  type: 'green'
}
];

function App() {
  return (
    <div className='page_wrapper'>
      <div className='page_container'>
        <nav className='side_nav'>
          <a href='' className='side_nav_sec app selected'></a>
          <a href='' className='side_nav_sec search'></a>
          <a href='' className='side_nav_sec briefcase'></a>
          <div className='clear'></div>
        </nav>
        <header className="header_wrapper">
          <div className="header_container">
            <span className='header_logo'>YourLogo</span>
            <div className='header_right'>
              <div className='icon_notification' message-count='699'>
                <img src={bell} width='32' height='32' alt='Notification' />
              </div>
              <div className='profile_avatar' title='Tushar Dhamor'>TD</div>
            </div>
          </div>
        </header>
        <div className='content_wrapper'>
          <div className='content_container'>
            <h1 className='the_title'>Your Jobs</h1>
            <div className='job_filters_container'>
              <form>
                <div className='input_container'>
                  <select>
                    <option>All Content Categories</option>
                  </select>
                </div>
                <div className='input_container'>
                  <select>
                    <option>All Industries</option>
                  </select>
                </div>
                <div className='input_container status'>
                  <select>
                    <option>Status</option>
                  </select>
                </div>
                <span className='clear_filter_label'>Clear all</span>
                <div className='filter_section_right'>
                  <span className='display_count'>Displaying 1-8 of 123 jobs</span>
                  <div className='input_container'>
                    <select>
                      <option>Least time left first</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className='job_list_container'>
              <ul className='job_ul'>
                {/* if we give color classed based on data to job_li below it will be sufficient, red, orange, blue, green(default) */}
                {jobs.map((j, index) => (
                  <JobList job={j} key={index}/>
                ))}
              </ul>
            </div>
            <ul className="pagination_bar">
              <li className='first'>
                <a href=''>First</a>
              </li>
              <li className='page nav_icon pre'>
                <a href=""></a>
              </li>
              <li className="page">
                <a href="">10</a>
              </li>
              <li className="page current">
                <span>11</span>
              </li>
              <li className="page">
                <a href="">12</a>
              </li>
              <li className="page">
                <a href="">13</a>
              </li>
              <li className="page">
                <a href="">14</a>
              </li>
              <li className="page_gap">…</li>
              <li className="page">
              <a href="">999</a>
              </li>
              <li className='page nav_icon next'>
                <a href=""></a>
              </li>
              <li className='last'>
                <a href=''>Last</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
