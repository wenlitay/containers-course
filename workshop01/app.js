import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use('/images', express.static('images'))

const textList = [
  'Logic will get you from A to B. Imagination will take you everywhere.',
  `There are 10 kinds of people. Those who know binary and those who don\'t.`,
  'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.',
  `It's not that I'm so smart, it's just that I stay with problems longer.`,
  'It is pitch dark. You are likely to be eaten by a grue.',
]

app.get('/', (req, res) => {
  const randomText = textList[Math.floor(Math.random() * textList.length)]

  res.render('home', {
    randomText,
  })
})

app.listen(3000, () => {
  console.log('express-handlebars example server listening on: 3000')
})
