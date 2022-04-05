const express = require('express')
const router=express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals } = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')
//you can enchain get and post 
// router.route('/').get(getGoals).post(setGoals)

router.get('/',protect, getGoals)
router.post('/',protect, setGoals)

//you can enchain put and delete
// router.route('/:id').put(updateGoals).delete(deleteGoals)

router.put('/:id',protect, updateGoals)
router.delete('/:id',protect, deleteGoals)

module.exports = router
