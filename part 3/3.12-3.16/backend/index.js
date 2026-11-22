require('dotenv').config()
const Phonenumber = require('./models/phonenumber')
const express = require('express')
var morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('dist'))

let numbers = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]


const generateId = () => {
  return String(Math.random() * 1000000)
}

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Phonenumber.find({}).then(persons => {
      response.json(persons)
    })
})

app.get('/api/info', (request, response) => {
  Phonenumber.countDocuments().then(count => {
    response.send(`Phonebook has info for ${count} people. ${new Date()}`)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Phonenumber.findById(request.params.id).then(note => {
      response.json(note)
    })
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  numbers = numbers.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
  const note = new Phonenumber(person)
  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
