let boxesa=document.querySelectorAll(".box");
let newbtn=document.querySelector("#reset");
let reset=document.querySelector("#reset");
let msgbox=document.querySelector(".msgbox");
let msg=document.querySelector("#msg");
let turnO=true;
const win=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,6],
  [3,4,5],
  [6,7,8]
];
console.log("sdc");
boxesa.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO){
      box.innerText ="O";
      turnO=false;
    }else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    console.log("button click");
    checkWinner();
  });
});
const showwinner=(winner)=>{
  msg.innerText=`congrats MAN winner is ${winner}`;
  msgbox.classList.remove("hide");
  disableboxes();
};
const disableboxes=()=>{
  for(let box of boxesa){
    box.disabled=true;
  }
}
const checkWinner=()=>{
  for(pattern of win){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxesa[pattern[0]].innerText,
    //   boxesa[pattern[1]].innerText,
    //   boxesa[pattern[2]].innerText);
  let pos1val=boxesa[pattern[0]].innerText;
  let pos2val=boxesa[pattern[1]].innerText;
  let pos3val=boxesa[pattern[2]].innerText;

  if(pos1val!=""&&pos2val!=""&&pos3val!=""){
    if(pos1val===pos2val&&pos2val===pos3val){
      if(pos1val=="X")
      {
        showwinner(pos1val);
        console.log("X Winner");
      }else{
        console.log("O winner");
        showwinner(pos1val);
      }
    }
  };
  
}
};
const resetGAME=()=>{
  turnO=true;
  enableBoxes();
  msgbox.classList.add("hide");
}
const enableBoxes=()=>{
  for (let box of boxesa) {
    box.disabled = false;
    box.innerText = "";
  }
}
newGameBtn.addEventListener("click", resetGAME);
resetBtn.addEventListener("click", resetGAME);