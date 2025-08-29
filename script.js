// heart button functionality
let heartCount = 0;
const heartButtons = document.querySelectorAll('.heart-btn');
for(const button of heartButtons){
    button.addEventListener('click',function(){ 
        heartCount++;
        document.getElementById('heart-count').innerText = heartCount;
    })
}


// call button functionality
const callButtons = document.getElementsByClassName('call-btn');
for (let btn of callButtons) {
  btn.addEventListener('click', function () {
    let coinElement = document.getElementById('coin-count');
    let coinCount = parseInt(coinElement.innerText);

    if (coinCount >= 20) {
      const serviceName =
        btn.parentNode.parentNode.children[0].children[0].children[1].children[0].innerText;

      const serviceNumber =
        btn.parentNode.parentNode.children[1].children[0].innerText;

      coinCount -= 20;
      coinElement.innerText = coinCount;

      alert('You are calling ' + serviceName + ' at ' + serviceNumber);
    } 
    else {
      alert('Your coin is less than 20. Please reload coins to make this call');
    }
  });
}

// copy button functionality
let copyCount = 0;
const copyButtons = document.getElementsByClassName('copy-btn');
for (let btn of copyButtons){
  btn.addEventListener('click', function (){
    const serviceNumber =
      btn.parentNode.parentNode.children[1].children[0].innerText;
    navigator.clipboard.writeText(serviceNumber);
    alert('Number has been copied : '+serviceNumber)
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
  })
}