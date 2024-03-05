let usescore=0;
let compscore=0;




let choice=document.querySelectorAll(".choice_img")
let msg=document.querySelector(".pick")
let comp_id=document.querySelector("#C_ch")
let user_ch=document.querySelector("#user_ch")
let comp_ch=document.querySelector("#comp_ch")
const genComp=()=>{
  const options=["Rock","Paper","Scissors"]
 const randomIndex= Math.floor(Math.random()*3)
 return options[randomIndex];
}

const playGame= (userChoice) =>{
  console.log("user choice=",userChoice)
      const compChoice=genComp()
      console.log("Comp choice =",compChoice)

    
      if(userChoice=="Rock" && compChoice=="Scissors"){
        comp_id.innerText=compChoice
        console.log("User wins");
        msg.innerText="You Win !"
        msg.style.backgroundColor="Green"
        usescore++

      }else if(userChoice=="Paper" && compChoice=="Rock"){
        comp_id.innerText=compChoice
        console.log("User wins");

        msg.innerText="You Win !"
        msg.style.backgroundColor="Green"


        usescore++

      }else if(userChoice=="Scissors" && compChoice=="Paper"){
        comp_id.innerText=compChoice
        console.log("User wins");

        msg.innerText="You Win !"
        msg.style.backgroundColor="Green"

        usescore++

      }else if(userChoice==compChoice){
        comp_id.innerText=compChoice
        console.log("Draw");

        msg.innerText="Draw !"
        msg.style.backgroundColor="rgba(2, 2, 40, 0.408)"

      }else{
        comp_id.innerText=compChoice
        console.log("Computer wins");

        msg.innerText="Computer Win "
        msg.style.backgroundColor="Red"

         compscore++;
      }
   user_ch.innerText=usescore
   comp_ch.innerText=compscore
   
   if(usescore>compscore){
      if(usescore==5){
        msg.innerText="Congrats,You won this round "
        usescore=0;
        compscore=0;
      }
   }else{
    if(compscore==5){
        msg.innerText="Sorry Buddy, You Lost "
        usescore=0;
        compscore=0;
      
    }
   }

}



choice.forEach((val)=>{
    val.addEventListener("click", ()=>{
        let userChoice=val.getAttribute("id")
          playGame(userChoice);
    })


    
  })
    
