import React from 'react';
import CourseListRow from './CourseListRow';
import {Link} from 'react-router';


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
          <tbody>
            {this.props.courses.map(course =>
                <CourseListRow key={course.id} course={course} removeCourse={this.props.removeCourse} />
            )}
          </tbody>
        </table>
      </div>
    )
  }

}

export default CourseList;
