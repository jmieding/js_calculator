// Javascript calculator
$(document).ready(function() {
  var nums = [];
  var currentNum = '';

  function addNum(entry) {
    currentNum += entry;
    document.getElementById('viewport').innerHTML = currentNum;
  }

  function addOperation(newOperation) {
    if (currentNum === '') {
      nums[nums.length - 1] = newOperation;
    }
    else {
    nums.push(currentNum, newOperation);
    currentNum = '';
    }
    document.getElementById('viewport').innerHTML = newOperation;
  }

  function percent() {
    currentNum *= 0.01;
    document.getElementById('viewport').innerHTML = currentNum;
  }

  function allClear() {
    nums = [];
    currentNum = ''
    document.getElementById('viewport').innerHTML = '0';
  }

  function clearLast() {
    currentNum = '';
    document.getElementById('viewport').innerHTML = '0';
  }

  function equals(nums) {
    if (nums[nums.length - 1] === '+' || 
      nums[nums.length - 1] === '-' || 
      nums[nums.length - 1] === '*' || 
      nums[nums.length - 1] === '/') 
    {
      nums.push(currentNum);
    }
    var numsString = nums.join(' ');
    var result = eval(numsString);
    var result = result.toFixed(2);
    document.getElementById('viewport').innerHTML = result;
    nums.length = 0;
    currentNum = result.toString();
  }

  $('#1').click(function() { addNum('1') });
  $('#2').click(function() { addNum('2') });
  $('#3').click(function() { addNum('3') });
  $('#4').click(function() { addNum('4') });
  $('#5').click(function() { addNum('5') });
  $('#6').click(function() { addNum('6') });
  $('#7').click(function() { addNum('7') });
  $('#8').click(function() { addNum('8') });
  $('#9').click(function() { addNum('9') });
  $('#0').click(function() { addNum('0') });
  $('#zeros').click(function() { addNum('00') });
  
  $('#decimal').click(function() { addNum('.') });
  $('#percent').click(function() { percent() });
  
  $('#add').click(function() { addOperation('+') });
  $('#subtract').click(function() { addOperation('-') });
  $('#multiply').click(function() { addOperation('*') });
  $('#divide').click(function() { addOperation('/') });
  $('#equals').click(function() { equals(nums) });

  $('#all_clear').click(function() { allClear() });
  $('#clear_last').click(function() { clearLast() });
});