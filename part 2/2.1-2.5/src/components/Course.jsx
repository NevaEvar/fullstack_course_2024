
const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({parts}) => {
  return (
    <p>
        {parts.map(part =>
            <li key = {part.id}>
                {part.name} {part.exercises}
            </li>)}
    </p>
  )
}

const Total = ({parts}) => {
    return (
        <p> 
            Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </p>
    )
}



const Course = ({course}) => {
    return (
        <div>
            <Header course={course} />
            <Part parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course
