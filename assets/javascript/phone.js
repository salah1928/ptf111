const ps = document.querySelectorAll('.fader')
console.log(ps);

const appearopts = {
    threshold: 1,
    rootMargin:"0px",
}
const appearOnScroll = new IntersectionObserver(function(e,observer){
    e.forEach(entry=>{
        
        if(!entry.isIntersecting){
            return;
        }else{
            console.log(e);
            
            entry.target.classList.add("appear")
            appearOnScroll.unobserve(entry.target)
        }
    })
},appearopts)

ps.forEach(p=>{
    appearOnScroll.observe(p)
})