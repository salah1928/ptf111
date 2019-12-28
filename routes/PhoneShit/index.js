const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('PhoneShit')
})
router.get('/contact',(req,res)=>{
    res.render('PhoneShit/contact')
})



module.exports = router