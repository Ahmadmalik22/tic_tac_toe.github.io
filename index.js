const boxes=document.querySelectorAll(".btn")
const msg=document.querySelector(".msg")
const rest=document.querySelector(".reset")
let pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let turno=true;
let click=0;

// !chechk winner declare
const checkwinner=()=>{
    click++;
    for (let position of pattern){
        let pos1=boxes[position[0]].innerHTML;
        let pos2=boxes[position[1]].innerHTML;
        let pos3=boxes[position[2]].innerHTML;
     if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            // console.log(`Winner is ${pos1}`)
            Showwin(pos1);
            disable();
        }
       else if(click==9){
        msg.innerHTML="Match is draw";
        msg.classList.remove("hide");
       }
     }
    
    }
}
// *disable function decalre
const disable=()=>{
  for (let box of boxes){
    box.disabled=true;
  }
}

// ?show win declare
const Showwin=(win)=>{
    msg.classList.remove("hide")
    msg.innerHTML=`winner is ${win}`;
}


boxes.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        if(turno){
            ele.innerHTML="O"
            turno=false;
            ele.disable="true"
        }
        else{
            ele.innerHTML="X"
            turno=true;
        }
        ele.disabled=true;
        checkwinner();
    })
    
})
rest.addEventListener("click",()=>{
    turno=true;
    for (let bo of boxes){
        bo.disabled=false;
        bo.innerHTML="";
    }
    msg.classList.add("hide")
    click=0;
})