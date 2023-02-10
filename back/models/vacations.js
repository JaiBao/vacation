import { Schema, model, ObjectId } from 'mongoose'

const schema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  dateTime: {
    type: [{
      day: {
        type: ObjectId,
        ref: 'dateTimes',
        required: [true, '請選擇假期']
      },
      quantity: {
        type: Number,
        required: [true, '請選擇時數']
      }
    }],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default model('vacations', schema)
