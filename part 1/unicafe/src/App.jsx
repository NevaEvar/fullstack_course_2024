
import { useState } from 'react'

const Header = (props) => {

  return (
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (    
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}

const All = ({content}) => {
  return(
    <tr>
      <td>all</td>
      <td>
        {content[0].value + content[1].value + content[2].value}
      </td>
    </tr>
  )
}

const Average = ({content}) => {
  const allReviews = content[0].value + content[1].value + content[2].value
  const sumReviews = content[0].value - content[1].value
  return(
    <tr>
      <td>average</td>
      <td>{sumReviews/allReviews}</td>
    </tr>
  )
}

const Positive = ({ content }) => {
  const allReviews = content[0].value + content[1].value + content[2].value
  return(
    <tr>
      <td>positive</td>
      <td>{content[0].value/allReviews} %</td>
    </tr>
  )
}

const Statistics = ({content}) => {
  if (content[0].value === 0 && content[1].value === 0 && content[2].value === 0) {
    return (
      <div>
        No feedback yet
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text={content[0].review} value={content[0].value}/>
          <StatisticsLine text={content[2].review} value={content[2].value}/>
          <StatisticsLine text={content[1].review} value={content[1].value}/>
          <All content={content} />
          <Average content={content} />
          <Positive content={content} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  //feedback functions and variables
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  
  const title1 = "give feedback"
  const title2 = "statistics"

  const content = [
    {review: "good", value: good},
    {review: "bad", value: bad}, 
    {review: "neutral", value: neutral}
  ]
  
  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }


  return (
    <div>
      <Header course={title1} />
      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />

      <Header course={title2} />
      <Statistics content={content} />

    </div>
  )
}

export default App

