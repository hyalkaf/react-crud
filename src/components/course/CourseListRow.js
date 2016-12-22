import React from 'react';
import {Link} from 'react-router';

class CourseListRow extends React.Component {
  // const CourseListRow = ({course, removeCourse}) => {

  componentWillAppear() {
    console.info('>>> componentWillAppear');
  }
  componentWillLeave() {
    console.info('>>> componentWillLeave');
  }
  componentDidLeave() {
    console.info('>>> componentDidLeave');
  }

  render(){
    const {course, removeCourse} = this.props;
    return (
        <tr>
          <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
          <td>{course.authorId}, {course.author.firstName} {course.author.lastName}</td>
          <td>{course.level}</td>
          <td>{course.tags && course.tags.join(', ')}</td>
          <td>{course.description}</td>
          <td><input type="button" value="Remove" onClick={removeCourse.bind(null, course.id)} /></td>
        </tr>
    )
  }
};

export default CourseListRow;



