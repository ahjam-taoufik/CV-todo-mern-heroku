//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals =  (req, res) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    res.status(200).json({message:'Get Goals'})
}


//@desc Set goals
//@route POST /api/goals
//@access Private
const setGoals =  (req, res) => {
    res.status(200).json({message:'Add Goals'})
}

//@desc Update goals
//@route PUT /api/goals/:id
//@access Private
const updateGoals =  (req, res) => {
    res.status(200).json({message:`Update Goals ${req.params.id}`})
}

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals =  (req, res) => {
    res.status(200).json({message:`Delete Goals ${req.params.id}`})
}





module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}