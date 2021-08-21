// memory
document.getElementById('memory-8gb').addEventListener('click', function () {
  addPrice('memory-cost', 0);
});

document.getElementById('memory-16gb').addEventListener('click', function () {
  addPrice('memory-cost', 80);
});

// storage

document.getElementById('ssd-256').addEventListener('click', function () {
  addPrice('storage-cost', 0);
});

document.getElementById('ssd-512').addEventListener('click', function () {
  addPrice('storage-cost', 200);
});

document.getElementById('ssd-1tb').addEventListener('click', function () {
  addPrice('storage-cost', 300);
});

// delivery

document.getElementById('free-delivery').addEventListener('click', function () {
  addPrice('delivery-cost', 0);
});

document.getElementById('paid-delivery').addEventListener('click', function () {
  addPrice('delivery-cost', 20);
});

// total cost

// find items price
function addPrice(itemsName, price) {
  const Cost = document.getElementById(itemsName);
  Cost.innerText = price;
}
