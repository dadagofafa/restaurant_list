const mongoose = require('mongoose')
const Restaurant = require('../Restaurant')
const restaurantList = require('../../restaurants.json').results

mongoose.connect('mongodb://localhost/restaurant_list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('updating restaurantSeeder script...')

  Restaurant.create(restaurantList)
    .then(() => {
      console.log('restaurantSeeder update done!')
    })
    .catch(error => console.log(error))
})






