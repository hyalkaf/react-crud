export function createCourse(course) {
  if (course.id) {
    return { type: 'UPDATE_COURSE', course };
  }

  return { type: 'CREATE_COURSE', course };
}

export function removeCourse(courseId) {
  return { type: 'REMOVE_COURSE', courseId };
}
