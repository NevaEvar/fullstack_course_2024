
const NewPersonName = ({newName, handleNameChange}) => {
  return (
    <div>
      name: <input 
      value={newName} 
      onChange={handleNameChange}/>
    </div>
  )
}

const NewPersonNumber = ({newNumber, handleNumberChange}) => {
  return (
    <div>
      number: <input 
      value={newNumber}
      onChange={handleNumberChange}/>
    </div>
  )
}

const PersonForm = ({addNumber, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    <form onSubmit={addNumber}>
        <NewPersonName 
          newName={newName}
          handleNameChange={handleNameChange}
        />
        <NewPersonNumber 
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}
export default PersonForm
