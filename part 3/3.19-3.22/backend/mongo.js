const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://egetsuneva_db_user:${password}@cluster0.9qfakun.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 }).then(() => {

  const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
  })

  const Note = mongoose.model('Phonenumber', phonebookSchema)

  if (process.argv.length < 4) {
    console.log('Phonebook:')
    Note.find({}).then(result => {
      result.forEach(entry => {
        console.log(entry)
      })
      mongoose.connection.close()
    })
  }

  if (process.argv.length === 5) {
    const name = process.argv[3]
    const number = process.argv[4]
    const note = new Note({
      name: name,
      number: number,
    })

    note.save().then(result => {
      console.log('Number saved!')
      mongoose.connection.close()
    })
  }
})