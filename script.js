const boxes=document.querySelectorAll(".box");
const reset=document.querySelector(".reset");
const msg=document.querySelector(".msg");
const w=document.querySelector(".winner");
const newgame=document.querySelector(".newgame");

let turn0=true;//player0 and player x
//2d array for winning index
const winning=[[0,1,2],[0,3,6],[0,4,8],
                [1,4,7],[2,5,6],[2,4,6],[3,4,5],[6,7,8]];
//count for draw
let count=0;
//event listener
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            box.classList.add("O");
            box.classList.remove("X");
            turn0=false;
            count++;
        }else{
            box.innerText="X";
            box.classList.add("X");
            box.classList.remove("0");
            turn0=true;
            count++;
        }
        box.disabled=true;
        checkwinner();
        if(count>=9){
            msg.innerText=`Game is Draw, No winner`;
            w.classList.remove("hide");
        }
    });
});
//check values
const checkwinner=()=>{
    for(let pattern of winning){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1==p2 && p2==p3){
                console.log("win",p1);
                showwinner(p1);
            }
        }
    }
};
//showwinner
const showwinner=(winner)=>{
    msg.innerText=`Congratulation!  ${winner} is Winner`;
    w.classList.remove("hide");
    disablebox();
}
//disable if winnerd or draw
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//reset 
reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
    }
});
//newfuncion to clear
newgame.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        w.classList.add("hide");
    }
});
