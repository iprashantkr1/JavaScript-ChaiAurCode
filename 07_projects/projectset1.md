# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project - 1 : colorChanger

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project - 2 : bmiCalculator

```javascript
const form = document.querySelector('form');
//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //method used to prevent or stop default action of form
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const message = document.querySelector('#message');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      message.innerHTML = `<span><p>You are Under Weight</p></span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message.innerHTML = `<span><p>You are in Normal Range</p></span>`;
    }
    if (bmi > 24.9) {
      message.innerHTML = `<span><p>You are Over Weight</p></span>`;
    }
  }
});

```

## Project - 3 : DigitalClock

```javascript
//const clock = document.querySelector('#clock') //use any method getElementById() or querySelector()

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

