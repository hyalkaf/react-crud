import React from 'react';
import TextInput from './../commons/TextInput';
import SelectInput from './../commons/SelectInput';
import TextArea from './../commons/TextArea';
import RadioGroup from './../commons/RadioGroup';
import CheckBox from './../commons/CheckBox';


const CourseForm = ({ course, allAuthors, onChange, onSave, loading, staticLists, errors }) => {
  return (
    <form className="container">
      <h2>Manage Course form</h2>

      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Select Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />

      <TextArea
        name="description"
        label="Description"
        rows={6}
        value={course.description}
        onChange={onChange}
        error={errors.description}
      />

      <RadioGroup
        name="level"
        label="Level"
        selectedOption={course.level}
        options={staticLists.courseLevel}
        onChange={onChange}
        error={errors.level}
      />

      <CheckBox
        name="tags"
        label="tags"
        selectedOptions={course.tags}
        options={staticLists.tagList}
        onChange={onChange}
        error={errors.level}
      />


      <input type="submit" className="btn btn-primary" value="Save!!!" onClick={onSave}/>
    </form>
  )
}

export default CourseForm;
