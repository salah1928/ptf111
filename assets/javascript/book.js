const ldn1 = document.getElementById('ldn1')
const ldn2 = document.getElementById('ldn2')
const title = document.getElementById('title')
const headtxt = document.getElementById('headtxt')
const subtit = document.getElementById('subtit')
const subtxt = document.getElementById('subtxt')
const btns = document.getElementById('btn')
const nav = document.getElementById('nav')
const bnf = document.getElementById('bnf')
const txt = document.querySelectorAll('.bnttxt')
const img = document.querySelectorAll('.bntimg')

const abt = document.getElementById('abt')
const abttit = document.querySelector('.abttit')
const abttxt = document.querySelector('.abttxt')
const abtimg = document.querySelector('#abtimg')
const philotit = document.querySelector('.philotit')
const philotxt1 = document.querySelector('.philotxt1')
const philotxt2 = document.querySelector('.philotxt2')
const abtbtn = document.querySelector('.abtbtn')

const contact = document.getElementById('contact')
const cicon = document.querySelectorAll('.cicon1')
const ctit = document.querySelectorAll('.ctit1')
const cinfo = document.querySelectorAll('.cinfo1')
const cicon2 = document.querySelectorAll('.cicon')
const ctit2 = document.querySelectorAll('.ctit')
const cinfo2 = document.querySelectorAll('.cinfo')
const form = document.getElementById('form')
const ftit = document.getElementById('ftit')
const fipt = document.querySelectorAll('.fipt')
const fipt1 = document.querySelectorAll('.fipt1')
const fipt2 = document.querySelectorAll('.fipt2')
const fipt3 = document.querySelectorAll('.fipt3')


const t1 = new TimelineMax();

t1
.fromTo(bnf,0,{opacity:"1"},{opacity:"0"})
.fromTo(abt,0,{opacity:"1"},{opacity:"0"})
.fromTo(contact,0,{opacity:"1"},{opacity:"0"})
.fromTo(ldn1,1,{y:'-100%'},{y:"0%",ease:Power2.easeInOut})
.fromTo(ldn2,1,{y:'200%',opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.9')
.fromTo(title,1,{x:'-200%'},{x:'0%',ease:Power2.easeInOut},'-=0.7')
.fromTo(headtxt,1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
.fromTo(subtit,1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')
.fromTo(subtxt,1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.7')
.fromTo(btns,1,{y:"20%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.9')
.fromTo(nav,1,{y:"-100%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.9')



const bnfobs = new IntersectionObserver(function(e,o){
    e.forEach(en=>{
        if(!en.isIntersecting){
            return
        }else{
            const t2 = new TimelineMax();
            
            t1.fromTo(bnf,0,{opacity:"0"},{opacity:"1"})
        
            t2.fromTo(img[0],0.8,{y:"-50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(img[2],0.8,{y:"50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')
            .fromTo(img[1],0.8,{y:"-50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')
            .fromTo(img[3],0.8,{y:"50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')

            t2
            .fromTo(txt[2],0.8,{y:"-50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(txt[0],0.8,{y:"50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')
            .fromTo(txt[3],0.8,{y:"-50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')
            .fromTo(txt[1],0.8,{y:"50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')

            bnfobs.unobserve(bnf)
        }
        
    })
},{rootMargin:"0px",threshold:"0.4"})
bnfobs.observe(bnf)

const abtobs = new IntersectionObserver(function(e,o){
    e.forEach(en=>{
        if(!en.isIntersecting){
            return
        }else{
            const t3 = new TimelineMax();
            t1.fromTo(abt,0,{opacity:"0"},{opacity:"1"})
            t3.fromTo(abttit,0.9,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(abtimg,0.9,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.9')
            .fromTo(abttxt,0.9,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
            .fromTo(philotit,0.9,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
            .fromTo(philotxt1,0.9,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
            .fromTo(philotxt2,0.9,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
            .fromTo(abtbtn,0.9,{y:"50%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')


            abtobs.unobserve(abt)
        }
    })
},{rootMargin:"0px",threshold:"0.4"})
abtobs.observe(abt)

const contactobs = new IntersectionObserver(function(e,o){
    e.forEach(en=>{
        if(!en.isIntersecting){
            return
        }else{
            const t4 = new TimelineMax();
            t1.fromTo(contact,0,{opacity:"0"},{opacity:"1"})
            t4
            .fromTo(cicon,0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(ctit,0.6,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.3')
            .fromTo(cicon2,0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.2')
            .fromTo(ctit2,0.6,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.3')
            .fromTo(cinfo,0.6,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
            .fromTo(cinfo2,0.6,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')

            .fromTo(ftit,0,{opacity:"1"},{opacity:"0",ease:Power2.easeInOut})
            .fromTo(fipt,0,{opacity:"1"},{opacity:"0",ease:Power2.easeInOut})
            .fromTo(fipt1,0,{opacity:"1"},{opacity:"0",ease:Power2.easeInOut})
            .fromTo(fipt2,0,{opacity:"1"},{opacity:"0",ease:Power2.easeInOut})
            .fromTo(fipt3,0,{opacity:"1"},{opacity:"0",ease:Power2.easeInOut})
            .fromTo(form,0.5,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.4")
            .fromTo(ftit,0.5,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.4")
            .fromTo(fipt,0.5,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.4")
            .fromTo(fipt1,0.5,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.4")
            .fromTo(fipt2,0.5,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.4")
            .fromTo(fipt3,0.5,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.3")
            contactobs.unobserve(contact)
        }
    })
},{rootMargin:"0px",threshold:"0.4"})
contactobs.observe(contact)

