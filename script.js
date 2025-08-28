let heartCount = 0;
const heartButtons = document.querySelectorAll('.heart-btn');
for(const button of heartButtons){
    button.addEventListener('click',function(){ 
        heartCount++;
        document.getElementById('heart-count').innerText = heartCount;
    })
}


const callButtons = document.getElementsByClassName('call-btn');

for (let btn of callButtons) {
  btn.addEventListener('click', function () {
    let coinElement = document.getElementById('coin-count');
    let coinCount = parseInt(coinElement.innerText);

    // ✅ check first before subtracting
    if (coinCount >= 20) {
      // grab service info
      const serviceName =
        btn.parentNode.parentNode.children[0].children[0].children[1].children[0].innerText;

      const serviceNumber =
        btn.parentNode.parentNode.children[1].children[0].innerText;

      // subtract 20
      coinCount -= 20;
      coinElement.innerText = coinCount;

      alert('You are calling ' + serviceName + ' at ' + serviceNumber);
    } else {
      // not enough coins
      alert('Your coin is less than 20. Please reload coins to make this call');
    }
  });
}

// const callButtons = document.getElementsByClassName('call-btn');
// for(let btn of callButtons){
//     btn.addEventListener('click',function(){
//         const serviceName = 
//             btn.parentNode.parentNode.children[0].children[0].children[1].children[0].innerText;
//         // console.log(serviceName)
//         const serviceNumber = 
//             btn.parentNode.parentNode.children[1].children[0].innerText
//         // console.log(serviceNumber)
//         let coinCount = parseInt(document.getElementById('coin-count').innerText) - 20;
//         document.getElementById('coin-count').innerText = coinCount;
//         if(coinCount >= 20){
//             alert(serviceName + ' : ' + serviceNumber);
//         }
//         else{
//             alert('Your coin is less than 20. Please reload coin to make this call');
//         }
//     })
// }

// document.getElementById('police-call').
//     addEventListener('click', function(){
//         let coinCount = parseInt(document.getElementById('coin-count').innerText) - 20;
//         document.getElementById('coin-count').innerText = coinCount;
//         if(coinCount > 20){
//             alert('Police Help Line : 999');
//         }
//         else{
//             alert('Your coin is less than 20. Please reload coin to make this call');
//         }
//     })