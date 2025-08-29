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
      const history = document.getElementById('history-element')
      // console.log(history)
      const historyDiv = document.createElement('div');
      historyDiv.className = "dlt-history"
      historyDiv.innerHTML = `
              <div class="bg-[#c6c4c4] rounded-xl flex justify-between items-center p-2 mt-2" >
                <div>
                    <h4 class="font-[600] text-[16px]">${serviceName}</h4>
                    <h5 class="font-[500]">${serviceNumber}</h5>
                </div>
                <p class="text-[13px] font-bold">${new Date().toLocaleTimeString()}</p>
              </div>
                `;
      history.appendChild(historyDiv)
      // const serviceNameElem = document.createElement('p')
      // serviceNameElem.appendChild(serviceName)
      // const serviceNumberElem = document.createElement('p')
      // serviceNumberElem.appendChild(serviceNumber)
      // historyDiv.appendChild(serviceNameElem)
      // historyDiv.appendChild(serviceNumberElem)
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

// clear button functionality
const deleteHistory = document.getElementsByClassName('dlt-history')
document.getElementById('clear-btn').
  addEventListener('click', function(){
    for(let history of deleteHistory){
      history.style.display = 'none'
    }
  })