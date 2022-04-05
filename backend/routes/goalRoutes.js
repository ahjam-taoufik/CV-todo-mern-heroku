const express = require('express')
const router=express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals } = require('../controllers/goalController')


//you can enchain get and post 
// router.route('/').get(getGoals).post(setGoals)

router.get('/', getGoals)
router.post('/', setGoals)

//you can enchain put and delete
// router.route('/:id').put(updateGoals).delete(deleteGoals)

router.put('/:id', updateGoals)
router.delete('/:id', deleteGoals)

module.exports = router
