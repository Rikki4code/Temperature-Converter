const feh_calc = document.querySelector('.figure')
feh_calc.addEventListener('input', calculator)

function calculator(event){
   if(event.target.value !== ""){
      let user_input =Number(event.target.value)
    let final = (user_input * 1.8) + 32

document.querySelector('.res').innerHTML = final .toFixed(1)
document.querySelector('.result').style.display ="flex"
   }
else{
   document.querySelector('.result').style.display ="none"
}
}