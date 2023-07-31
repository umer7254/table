let count=""
let countEL= document.getElementById('counter')
let countEL2= document.getElementById('counter2')
function adds(){
  countEL2.innerHTML=' '
  count++
  countEL.innerHTML=count
}

function evenodd(){
// adds()
countEL2.innerHTML=' '
countEL2.innerHTML=' '
if (count%2==0){
  countEL2.innerHTML= 'even'
}
else
{ 
  countEL2.innerHTML= 'odd'
}
}
function tableone(){
  countEL.innerHTML=' '
    for (let count=1; count<11;count++)
    countEL.innerHTML+=
     "2 x" +count+" = "+count*2+"<br/>";
    
  }

  function tablethree(){
    countEL.innerHTML=' '
    for (let count=1; count<11;count++)
    countEL.innerHTML+= `3 x ${count} = ${count*3}<br/>`;
    
  }
  function tablefour(){
    countEL.innerHTML=' '
    for (let count=1; count<11;count++)
    countEL.innerHTML+= `4 x ${count} = ${count*4} <br/>`;
  }
  function tablefive(){
    countEL.innerHTML=' '
    for (let count=1; count<11;count++)

    countEL.innerHTML+= `5 x ${count} = ${count*5}<br/>`;
    
  }
  function save() {
  
    document.getElementById("saves"). innerHTML =count ;
}
  


  function incresmnt() {
    countEL.innerHTML=' '
    document.getElementById("count"). innerHTML = count;
}
  function reset(){
    
    countEL.innerHTML='my work '
    countEL2.innerHTML=' '
    document.getElementById("saves"). innerHTML =''
  }


  