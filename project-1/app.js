const change = function(){
    document.getElementById("change").innerHTML = "My name is Muhammad Bilal Riaz"
}
setTimeout(change,2000)



let intervalId;

function doSomething() {
  console.log('Interval action',Date.now());
}

document.getElementById('start').addEventListener('click', function() {
  intervalId = setInterval(doSomething, 1000);
});

document.getElementById('stop').addEventListener('click', function() {
  clearInterval(intervalId);
  console.log('Interval stopped');
});