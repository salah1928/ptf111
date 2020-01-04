const ldn1 = document.getElementById('ldn1')
const ldn2 = document.getElementById('ldn2')




const t1 = new TimelineMax();

t1.fromTo(ldn1,1,{y:'-100%'},{y:"0%",ease:Power2.easeInOut})
.fromTo(ldn2,1,{y:'200%'},{y:"0%",ease:Power2.easeInOut},'-=0.9')
.fromTo(title,1,{x:'-100%'},{x:'0%',ease:Power2.easeInOut},'-=0.7')