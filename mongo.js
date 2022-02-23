// remmeber i need require mongodb

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// this serve to adding new data and insights that wants!!!
MongoClient.connect('mongodb://localhost:27017/data-training', (err,db) => {
  
const human = db.collection('humano')
 human.insert({
     name:'Felipe Martins Programer',
     age:'20',
     nacionalites:'Brazilian',
     email:'machadofelipe2016@outlook.com',
     gender:'Male'
 } , (err, res) => {
     console.log(err,res)
 })

})
