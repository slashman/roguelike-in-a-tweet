var x=a=l=0,g=100
r=()=>Math.floor(Math.random()*20)
n=()=>{a=r();l++}
m=(e,x)=>e['style'].marginLeft=x*20
n()
onkeydown=v=>{if((g-=l)<0)return
r()<1?g+=20:x+=v.keyCode==37?-1:1
x==a?n():0
e.innerHTML="H"+g+" L"+l
m(s,a)
m(p,x)}