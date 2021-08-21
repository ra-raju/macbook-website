// memory buttons
document.getElementById('memory-8gb').addEventListener('click', function () {
  addPrice('memory-cost', 0);
  totalPrice();
});

document.getElementById('memory-16gb').addEventListener('click', function () {
  addPrice('memory-cost', 180);
  totalPrice();
});

// storage buttons

document.getElementById('ssd-256').addEventListener('click', function () {
  addPrice('storage-cost', 0);
  totalPrice();
});

document.getElementById('ssd-512').addEventListener('click', function () {
  addPrice('storage-cost', 100);
  totalPrice();
});

document.getElementById('ssd-1tb').addEventListener('click', function () {
  addPrice('storage-cost', 180);
  totalPrice();
});

// delivery buttons

document.getElementById('free-delivery').addEventListener('click', function () {
  addPrice('delivery-cost', 0);
  totalPrice();
});

document.getElementById('paid-delivery').addEventListener('click', function () {
  addPrice('delivery-cost', 20);
  totalPrice();
});

// promo code features

const netBalance = document.getElementById('net-balance');
netBalance.innerText = totalPrice();
document.getElementById('promo-btn').addEventListener('click', function () {
  const promoCode = document.getElementById('promo-code');
  const promoCodeValue = promoCode.value;
  if (promoCodeValue == 'stevekaku') {
    netBalance.innerText = totalPrice() - totalPrice() * 0.2;
    promoCode.value = '';
  }
});
// adding price in items

function addPrice(itemsName, price) {
  const Cost = document.getElementById(itemsName);
  return (Cost.innerText = price);
}
// individual cost

function amount(amountId) {
  const itemPrice = document.getElementById(amountId);
  const itemPriceInNum = parseInt(itemPrice.innerText);
  return itemPriceInNum;
}
// total cost and net balance

function totalPrice() {
  const netBalance = document.getElementById('net-balance');
  const basePrice = document.getElementById('base-price');
  const basePriceInNum = parseInt(basePrice.innerText);
  const totalPrice = document.getElementById('total-cost');
  netBalance.innerText =
    basePriceInNum +
    amount('storage-cost') +
    amount('memory-cost') +
    amount('delivery-cost');
  console.log(netBalance);
  return (totalPrice.innerText =
    basePriceInNum +
    amount('storage-cost') +
    amount('memory-cost') +
    amount('delivery-cost'));
}
