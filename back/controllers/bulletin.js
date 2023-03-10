
import bulletin from '../models/bulletin.js'

export const createBulletin = async (req, res) => {
  try {
    const result = await bulletin.create({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      content: req.body.content,
      actions: req.body.actions,
      title: req.body.title

    })
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ success: false, message: error.errors[Object.keys(error.errors)[0]].message })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}

export const getAllBulletin = async (req, res) => {
  try {
    const result = await bulletin.find()
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    res.status(500).json({ success: false, message: '未知錯誤' })
  }
}
