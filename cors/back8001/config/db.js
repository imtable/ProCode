const mongo = {
  uri: 'mongodb://localhost:27017/app',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }
}

const mySql = {
  host: 'localhost',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  port: 8888,
  user: 'root',
  password: 'root',
  database: 'test'
}

module.exports = {
  mongo, mySql
};
