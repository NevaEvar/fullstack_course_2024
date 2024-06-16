
const courses = [
  {name: 'Fundamentals of React', points: 10},
  {name: 'Using props to pass data', points: 7},
  {name: 'State of a component', points: 14}
]

const Header = () => {

  return (
    <div>
      <h1>
      Half Stack application development
      </h1>
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
      <p>{props.name} {props.points}</p>
    </div>
  )
}

const Content = () => { 
  
  return (
    <div> 
      <Part name={courses[0].name} points={courses[0].points} />
      <Part name={courses[1].name} points={courses[1].points} />
      <Part name={courses[2].name} points={courses[2].points} />
    </div>
  )
} 

const Total = () => {
  return (
    <div>
      <p>
        Number of exercises {courses[0].points + courses[1].points + courses[2].points}
      </p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App