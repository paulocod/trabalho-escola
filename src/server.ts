import { app } from './app'

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`🚀 servidor O N L I N E ${port}`)
})
