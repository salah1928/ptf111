const ps = document.querySelectorAll('.fader')
const hamburger = document.getElementById("ham")
const navl =  document.querySelectorAll('.navL')
const down = document.getElementById('down')
const footer = document.getElementById('footerHide')
const cpr = document.getElementById('cpr')




const ldn = document.getElementById("page")
const txt = document.getElementById("txt")
const headline = document.getElementById("headline")
const subline = document.getElementById("subline")
const btn1 = document.getElementById("btns1")
const btn2 = document.getElementById("btns2")
const nav = document.getElementById("nav")
const test = document.getElementById("test")
const sps = document.querySelectorAll(".r")

const sp = document.getElementById('SP')


const specs = document.getElementById("specdiv")
const specstit = specs.children[0]
const specli = specs.children[1].children


const abt = document.getElementById("abt")
const abt1 = document.getElementById("since")
const abt2 = document.getElementById("why")
const abt3 = document.getElementById("philo")
const abt4 = document.getElementById("abtus")


const contact = document.getElementById('contact')
const cred = document.getElementById('cred')
const form = document.getElementById('form')


const cta = document.getElementById('cta')

const t = new TimelineMax();

t
.fromTo(cta.children,0,{opacity:"1"},{opacity:"0"})
.fromTo(cred.children,0,{opacity:"1"},{opacity:"0"})
.fromTo(form.children,0,{opacity:"1"},{opacity:"0"})
.fromTo(form,0,{opacity:"1"},{opacity:"0"})
.fromTo(sp,0,{opacity:"1"},{opacity:"0"})
.fromTo(specstit,0,{opacity:"0"},{opacity:"0"})
.fromTo(specli,0,{opacity:"0"},{opacity:"0"})
.fromTo(abt.children,0,{opacity:"0"},{opacity:"0"})
.fromTo(headline,0.9,{opacity:"0",x:"-200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut})
.fromTo(subline,1,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.5")
.fromTo(btn1,1,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.8")
.fromTo(btn2,1,{opacity:"0",x:"200%"},{opacity:"1",x:"0%",ease:Power2.easeInOut},"-=0.8")
.fromTo(nav,1,{opacity:"0",y:"-100%"},{opacity:"1",y:"0%",ease:Power2.easeInOut},"-=0.6")

const spobs = new IntersectionObserver((e,o)=>{
    e.forEach(en=>{
        if(!en.isIntersecting){
            return
        }else{

            const t2 = new TimelineMax();
            t2.fromTo(sps,0,{opacity:"0"},{opacity:"0"})
            t.fromTo(sp,0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(sps[3],0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(sps[2],0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(sps[1],0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            .fromTo(sps[0],0.5,{x:"-200%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            
            o.unobserve(sp)
        }
    })
},{rootMargin:"0px",threshold:1})


spobs.observe(sp)





const appearopts = {
    threshold: 0.2,
    rootMargin:"0px",
}
const appearOnScroll = new IntersectionObserver(function(e,observer){
    e.forEach(entry=>{
        
        if(!entry.isIntersecting){
            return;
        }else{
            
            t.fromTo(entry.target.children,0,{opacity:"0"},{opacity:"0"})
            t.fromTo(entry.target,0.3,{y:"200px",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(entry.target.children[0],0.3,{y:"200px",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(entry.target.children[1],0.3,{y:"200px",opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut})
            
            
            
            appearOnScroll.unobserve(entry.target)
        }
    })
},appearopts)

ps.forEach(p=>{
    appearOnScroll.observe(p)
})




const specobs = new IntersectionObserver((e,o)=>{
    e.forEach(en=>{
        if(!en.isIntersecting){
            return
        }else{
            t
            .fromTo(specstit,0.2,{x:'-100%',opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(specli[0],0.2,{x:"100%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(specli[1],0.2,{x:"100%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(specli[2],0.2,{x:"100%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(specli[3],0.2,{x:"100%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            t.fromTo(specli[4],0.2,{x:"100%",opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut})
            o.unobserve(specs)
        }
    })
},{rootMargin:"0px",threshold:0.25})
specobs.observe(specs)






const abtobs = new IntersectionObserver((e,o)=>{
    e.forEach(ee=>{
        if(!ee.isIntersecting){
            return
        }else{
           
            t.fromTo(abt4,0.5,{opacity:"0",rotationY:-90,x:'50%'},{opacity:"1",rotationY:0,x:'0%',ease:Power2.easeInOut})
            t.fromTo(abt1,0.5,{opacity:"0",rotationY:90,x:'-50%'},{opacity:"1",rotationY:0,x:'0%',ease:Power2.easeInOut},'-=0.3')
            t.fromTo(abt3,0.5,{opacity:"0",rotationY:-90,x:'50%'},{opacity:"1",rotationY:0,x:'0%',ease:Power2.easeInOut},'-=0.3')
            t.fromTo(abt2,0.5,{opacity:"0",rotationY:90,x:'-50%'},{opacity:"1",rotationY:0,x:'0%',ease:Power2.easeInOut},'-=0.3')
            o.unobserve(abt)
        }
    })
},{threshold:0.5})

abtobs.observe(abt)



const contactobs = new IntersectionObserver((e,o)=>{
    e.forEach(ee=>{
        if(!ee.isIntersecting){
            return
        }else{
           
           t.fromTo(cred.children[0],0.8,{x:'-200%',opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut}) 
           .fromTo(cred.children[1],0.8,{x:'200%',opacity:"0"},{x:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.2') 
           .fromTo(form,0.8,{y:'100%',opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.2') 
           .fromTo(form.children[0],0.8,{y:'100%',opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.2') 
           .fromTo(form.children[1],0.8,{y:'100%',opacity:"0"},{y:"0%",opacity:"1",ease:Power2.easeInOut},'-=0.2') 
           
            o.unobserve(contact)
        }
    })
},{threshold:0.5})

contactobs.observe(contact)


const ctaobs = new IntersectionObserver((e,o)=>{
    e.forEach(ee=>{
        if(!ee.isIntersecting){
            return
        }else{
           
           t
           .fromTo(cta.children[0],0.8,{opacity:"0",x:'0%'},{opacity:"1",x:"-100%",ease:Power2.easeInOut})
           .fromTo(cta.children[1],0.8,{opacity:"0",x:'0%'},{opacity:"1",x:"100%",ease:Power2.easeInOut},'-=0.4')
           .fromTo(cta.children[2],0.8,{opacity:"0",scale:'0'},{opacity:"1",scale:"1",ease:Power2.easeInOut},'-=0.4')
           
            o.unobserve(cta)
        }
    })
},{threshold:0.1})

ctaobs.observe(cta)


function showNav(){
    navl.forEach(l=>{
        l.classList.toggle('show')
    })
}
function showFoot(){
    footer.classList.toggle('hidden1')
    cpr.classList.toggle('hidden')
    down.classList.toggle('turned')
    window.scrollTo(0,document.body.scrollHeight);
}