
    let amount = document.getElementById("amount");
    let network = document.getElementById("network");
    let LoadAirtime = document.getElementById("LoadAirtime");
    let thisPin = document.getElementById("thisPin")
    let container = document.getElementById('main')
    let balance = document.getElementById('balance')
    let section = document.getElementById('section')
    let image = document.getElementById('image')
    let bal = 0

    // To store all valid recharge pins
    let validPins = []
 

// To generate 15 number pin & display it on the DOM
    function genPin(){
        let pin = Math.floor(Math.random() * 1000000000000000)           
        thisPin.innerHTML = pin
    
// The code below pushes all pins created on click into the validPins array
        validPins.push(pin)
        console.log(validPins);
        alert(`You have generated ${network.value} of ${amount.value}`)
    }

// To recharge the airtime
function LoadAirtimeCard(){
// The code below converts the input value to a string using the string constructor
let values = String(LoadAirtime.value) 
// The code below catches the pin from the input value once the loadairtime button is clicked
let caughtValue = values.slice(5,20)   
console.log(caughtValue)


// In the code below we are checking if the inputed value fufills the first condition and if it does, it should still be false until it checks if the caughtvalue is actually present in my stored array and if it is, it should recharge the users account and the that value should be deleted from the array and become an invalid code else it should alert invalid formad or cade has been used
if( values.startsWith('*311*') && values.endsWith('#') && validPins.length > 0 ){
    isValid = false

for (const validPin of validPins){
if (caughtValue.includes(validPin) ){
    alert(`You have recharged ${network.value} of ${amount.value}`)
        validPins = validPins.filter((pin)=> {return pin != caughtValue})
        balance.innerHTML = `${bal += Number(amount.value)}`
        LoadAirtime.value = '*311*pin#'
        isValid = true
        console.log(validPins)
        break
  }   
}


if (!isValid) {
            alert('Invalid code');
        }        
}

else {
        alert('Invalid format or Recharge pin has been used');
    }



}

// This code changes the color of the container and the image in container and also resets all values for the new network
network.addEventListener('change', ()=> {
    let selectValue = network.value
    validPins = []
    thisPin.innerHTML = ''
    section.style.visibility = 'visible'
    balance.innerHTML = ''
    bal = 0

    if (selectValue == 'MTN') {
      container.style.backgroundColor = '#fccc09'
      image.innerHTML = `<img src="pngwing.com (1).png" alt="">`
    } else  if (selectValue == 'GLO') {
      container.style.backgroundColor = '#279927'
      image.innerHTML = `<img src="Glo_Limited.png" alt="">`
    } else  if (selectValue == 'AIRTEL') {
      container.style.backgroundColor = '#ec1b23'
      image.innerHTML = `<img src="Airtel-Black-Logo-PNG_fc07v5.png" alt="">`
    } else  if (selectValue == '9MOBILE') {
      container.style.backgroundColor = '#c3d800'
    image.innerHTML =  `<img src="pngwing.com (2).png" alt="">`
    }    
    else {
        container.style.backgroundColor = 'white' 
        section.style.visibility = 'hidden'
        image.innerHTML = ``
    }
   

})




   


       
      

