const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('Book')
})
router.get('/contact',(req,res)=>{
    res.render('Book/contact')
})
router.get('/about',(req,res)=>{
    res.render('Book/about')
})



module.exports = router