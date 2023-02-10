import { Schema, model, ObjectId, Error } from 'mongoose'
import bcrypt from 'bcrypt'

const schema = new Schema({
  account: {
    type: String,
    reqired: [true, '缺少帳號'],
    minlength: [4, '最請設定 4 個字元以上的帳號'],
    maxlength: [20, '最請設定 20 個字元以下的帳號'],
    unique: true,
    match: [/^[A-Za-z0-9]+$/, '帳號格式錯誤']
  },
  password: {
    type: String,
    required: true
  },
  tokens: {
    type: [String],
    default: []
  },
  phone: {
    type: String,
    reqired: [true, '請輸入電話'],
    default: ''
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
  role: {
    type: Number,
    // 0 = 使用者
    // 1 = 管理員
    default: 0
  }
}, { versionKey: false })

schema.pre('save', function (next) {
  const user = this
  if (user.isModified('password')) {
    if (user.password.length >= 4 && user.password.length <= 20) {
      user.password = bcrypt.hashSync(user.password, 10)
    } else {
      const error = new Error.ValidationError(null)
      error.addError('passwor', new Error.ValidationError({ message: '密碼長度錯誤' }))
      next(error)
    }
  }
  next()
})

schema.pre('findOneAndUpdate', function (next) {
  const user = this
  if (user.isModified('password')) {
    if (user.password.length >= 4 && user.password.length <= 20) {
      user.password = bcrypt.hashSync(user.password, 10)
    } else {
      const error = new Error.ValidationError(null)
      error.addError('passwor', new Error.ValidationError({ message: '密碼長度錯誤' }))
      next(error)
    }
  }
  next()
})

export default model('users', schema)
