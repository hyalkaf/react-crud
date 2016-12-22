import React from 'react';
import CourseListRow from './CourseListRow';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CourseList extends React.Component{

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h2>Courses Page</h2>
        <Link to={'/course'}>New Course</Link>

        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Level</th>
              <th>Tags</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            transitionName="course-item"
            transitionLeave={true}
            transitionAppear={true}
            transitionAppearTimeout={2500}
            transitionEnterTimeout={1700}
            transitionLeaveTimeout={1000}
            component="tbody"
          >
            {this.props.courses.map(course =>
                <CourseListRow key={course.id} course={course} removeCourse={this.props.removeCourse} />
            )}
          </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }

}

export default CourseList;
