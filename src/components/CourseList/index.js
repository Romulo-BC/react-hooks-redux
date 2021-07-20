import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

export default function CourseList() {
  const [courseTitle, setCourseTitle] = useState("");
  const courses = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function addCourseTitle(e) {
    e.preventDefault();
    dispatch(addCourseAction(courseTitle));
    setCourseTitle("");
  }
  
  return (
    <>
      <label>
        Adicionar Curso:
        <input
          type="text"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </label>
      <button type="submit" onClick={addCourseTitle}>
        Adicionar Curso
      </button>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </>
  );
}
