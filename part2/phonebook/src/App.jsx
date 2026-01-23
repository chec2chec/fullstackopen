import { useState } from 'react'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-1234567',
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      phone: newPhone,
    }

    const hasPerson = persons.filter((person) => person.name === personObject.name)
    if (hasPerson.length) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        <div>
          number: <input
            value={newPhone}
            onChange={handlePhoneChange}
          />
        </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <Person key={person.name + index} person={person} />
        ))}
      </ul>
    </div>
  )
}

export default App
