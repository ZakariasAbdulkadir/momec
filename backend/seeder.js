import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import services from './data/services.js'
import User from './models/userModel.js'
import Service from './models/serviceModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Service.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleServices = services.map(service => {
      return { ...service, user: adminUser }
    })

    await Service.insertMany(sampleServices)

    console.log('Data Imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destoryData = async () => {
  try {
    await Order.deleteMany()
    await Service.deleteMany()
    await User.deleteMany()

    console.log('Data Imported'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] == '-d') {
  destoryData()
} else {
  importData()
}
