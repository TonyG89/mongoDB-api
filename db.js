const { MongoClient } = require('mongodb')

const URL = 'mongodb://localhost:27017/'

const DATABASE_NAME = 'TMP';
const COLLECTION_NAME = 'blank_clothes';

let dbConnection
// 1.27.24 https://www.youtube.com/watch?v=sXcZQ5Zg-YM
module.exports = {
  connectToDb: async (cb) => {
    const client = new MongoClient(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    // console.log(cb())
    console.log('connectToDb +')
    try {
      await client.connect()
      console.log('connect ')

      const db = client.db(DATABASE_NAME)
      dbConnection = db.collection(COLLECTION_NAME)

      return cb()
    } catch (error) {
      console.log('xxx')
      return cb(error)
    }

    // console.log('xxx')
    // client
    //   .connect()
    //   .then(client => {
    //     console.log('Connected to MongoDb')
    //     dbConnection = client.db(DATABASE_NAME)
    //     return cb
    //   }).catch(err => {
    //     console.log('xxx')
    //     return cb(err)
    //   })
    // console.log(dbConnection)
    // console.log('connectToDb -')
  },
  getDb: () => dbConnection,
}