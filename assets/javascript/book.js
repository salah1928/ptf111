const ldn1 = document.getElementById('ldn1')
const ldn2 = document.getElementById('ldn2')
const title = document.getElementById('title')
const headtxt = document.getElementById('headtxt')
const subtit = document.getElementById('subtit')
const subtxt = document.getElementById('subtxt')
const btns = document.getElementById('btn')
const nav = document.getElementById('nav')

const t1 = new TimelineMax();

t1.fromTo(ldn1,1,{y:'-100%'},{y:"0%",ease:Power2.easeInOut})
.fromTo(ldn2,1,{y:'200%'},{y:"0%",ease:Power2.easeInOut},'-=0.9')
.fromTo(title,1,{x:'-200%'},{x:'0%',ease:Power2.easeInOut},'-=0.7')
.fromTo(headtxt,1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.5')
.fromTo(subtit,1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.6')
.fromTo(subtxt,1,{x:"200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.7')
.fromTo(btns,1,{y:"20%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.9')
.fromTo(nav,1,{y:"-100%",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.9')