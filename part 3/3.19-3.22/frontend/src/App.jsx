import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import numberService from './services/numbers'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [numbers, setNumbers] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [actionMessage, setActionMessage] = useState(null)

  useEffect(() => {
      numberService
        .getAll()
        .then(initialNumbers => {
          setNumbers(initialNumbers)
        })
      }, [])

  const addNumber = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if (newName === '') {
      alert('Name cannot be empty')
      return
    }

    if (newNumber === '') {
      alert('Number cannot be empty')
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }
    numberService
      .create(nameObject)
      .then(returnedNumber => {
      setNumbers(numbers.concat(returnedNumber))
      setNewName('')
      setNewNumber('')
      setActionMessage(`Number added: ${newName}`)
      setTimeout(() => {
        setActionMessage(null)
      }, 2000)
          })
  }
  
  const deleteNumber = (person) => {
    numberService
      .remove(person.id)
      .then(() => {
        setNumbers(current => current.filter(number => number.id !== person.id))
      setActionMessage(`Removed entry: '${person.name}' from server.`)
      setTimeout(() => {
        setActionMessage(null)
      }, 2000)
      })
      .catch(() => {
        alert('Failed to delete the number.')
      })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={actionMessage} />
      <PersonForm 
        addNumber={addNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <p>
        {numbers.map(number => (
          <Person 
            key={number.id} 
            person={number} 
            deleteNumber={() => deleteNumber(number)}/>
        ))}
      </p>
    </div>
  )

}

export default App