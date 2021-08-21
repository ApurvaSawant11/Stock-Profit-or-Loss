var initial = document.querySelector("#initial-price");
var quantityInput = document.querySelector("#quantity");
var current = document.querySelector("#current-price");
var checkBtn = document.querySelector("#checkBtn");
var outputDiv = document.querySelector(".output");

checkBtn.addEventListener("click", checkHandler);

function checkHandler(e) {
    e.preventDefault();
    var initialPrice = Number(initial.value);
    var quantity = Number(quantityInput.value);
    var currentPrice = Number(current.value);

    calculateProfitAndLoss(initialPrice, quantity, currentPrice);
}

function calculateProfitAndLoss(initialPrice, quantity, currentPrice) {
    
  if (initialPrice > currentPrice) {
    var loss = (initialPrice - currentPrice) * quantity;
    var lossPercent = (loss / initialPrice) * 100;

    outputDiv.style.backgroundColor='red';
    outputDiv.innerText = `Sorry! you had a loss of ${loss} and the loss percent is ${lossPercent}%`;
  }
  else if (currentPrice > initialPrice) {
    var profit = (currentPrice - initialPrice) * quantity;
    var profitPercent = (profit / initialPrice) * 100;

    outputDiv.style.backgroundColor='green';
    outputDiv.innerText =`Congrats, you made a profit of ${profit} and the profit percent is ${profitPercent}%`;
  } 
  else {
    outputDiv.innerText=`Ohhh! You didn't make any profit. But atleast you didn't make any loss`;
  }
}