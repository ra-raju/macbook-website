// memory
document.getElementById('memory-8gb').addEventListener('click', function () {
  addPrice('memory-cost', 0);
  totalPrice();

  //
  /* const memorycost = document.getElementById('memory-cost');
  const memorycostInNum = parseInt(memorycost.innerText);
  totalCost.innerText = totalCostInNum + memorycostInNum;
  console.log(totalCost); */
});

document.getElementById('memory-16gb').addEventListener('click', function () {
  addPrice('memory-cost', 80);
  totalPrice();

  /*  const memorycost = document.getElementById('memory-cost');
  const memorycostInNum = parseInt(memorycost.innerText);
  totalCost.innerText = totalCostInNum + memorycostInNum;
  console.log(totalCost); */
});

// storage

document.getElementById('ssd-256').addEventListener('click', function () {
  addPrice('storage-cost', 0);
  totalPrice();

  //
  /*  const memorycost = document.getElementById('storage-cost');
  const memorycostInNum = parseInt(memorycost.innerText);
  totalCost.innerText = totalCostInNum + memorycostInNum;
  console.log(totalCost); */
});

document.getElementById('ssd-512').addEventListener('click', function () {
  addPrice('storage-cost', 200);
  totalPrice();

  //
  /*  const memorycost = document.getElementById('storage-cost');
  const memorycostInNum = parseInt(memorycost.innerText);
  totalCost.innerText = totalCostInNum + memorycostInNum;
  console.log(totalCost); */
});

document.getElementById('ssd-1tb').addEventListener('click', function () {
  addPrice('storage-cost', 300);
  totalPrice();

  //
  /* const memorycost = document.getElementById('storage-cost');
  const memorycostInNum = parseInt(memorycost.innerText);
  totalCost.innerText = totalCostInNum + memorycostInNum;
  console.log(totalCost); */
});

// delivery

document.getElementById('free-delivery').addEventListener('click', function () {
  addPrice('delivery-cost', 0);
  totalPrice();
});

document.getElementById('paid-delivery').addEventListener('click', function () {
  addPrice('delivery-cost', 20);
  totalPrice();
});

// total cost

// find items price
function addPrice(itemsName, price) {
  const Cost = document.getElementById(itemsName);
  return (Cost.innerText = price);
}

function storageAmount() {
  const itemPrice = document.getElementById('storage-cost');
  const itemPriceInNum = parseInt(itemPrice.innerText);
  return itemPriceInNum;
}

function memoryAmount() {
  const itemPrice = document.getElementById('memory-cost');
  const itemPriceInNum = parseInt(itemPrice.innerText);
  return itemPriceInNum;
}

function deliveryAmount() {
  const itemPrice = document.getElementById('delivery-cost');
  const itemPriceInNum = parseInt(itemPrice.innerText);
  return itemPriceInNum;
}

function totalPrice() {
  const basePrice = document.getElementById('base-price');
  const basePriceInNum = parseInt(basePrice.innerText);
  const totalPrice = document.getElementById('total-cost');
  return (totalPrice.innerText =
    basePriceInNum + storageAmount() + memoryAmount() + deliveryAmount());
}
