const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('PhoneShit')
})
router.get('/contact',(req,res)=>{
    res.render('PhoneShit/contact')
})
router.get('/about',(req,res)=>{
    res.render('PhoneShit/about')
})



module.exports = router