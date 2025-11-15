// callback functions

const cars = [
  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
  { make: 'Ford', yrsOld: 12, mileage: 255005 },
  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
  { make: 'Tesla', yrsOld: 3, mileage: 57720 },
]

const drivenCars = cars.filter(checkMileage)

function checkMileage(car) {
  return (car.mileage / car.yrsOld > 20000)
}

// drivenCars.forEach(car => console.log(car))



// async functions

const colors = ['red', 'green', 'blue']

// console.log('Code BEFORE the forEach...')

// setTimeout(function() {
//   colors.forEach((color, idx) => {
//     console.log(`${idx + 1} - ${color}`)
//   })
// }, 1000)

// console.log('Code AFTER the forEach...')



// async demo

// const lightSequence = [
//   {color: 'red', time: 3000},
//   {color: 'yellow', time: 1000},
//   {color: 'green', time: 2000},
// ]

// const lightEls = document.querySelectorAll('main > div')

// let curLightIdx = 2

// function renderLight(cb) {
//   lightEls.forEach(light => light.style.backgroundColor = 'black')
//   lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color
//   setTimeout(cb, lightSequence[curLightIdx].time)
// }

// function renderNextLight() {
//   renderLight(renderNextLight)
//   curLightIdx === 0 ? curLightIdx = 2 : curLightIdx--
// }

// renderNextLight()



// this 

const person = {
  firstName: 'Billy',
  intro: function() {
    console.log(`Hello, I'm ${this.firstName}`)
  }
}

person.intro()

// poorly written class

class Sprite {
  constructor(color, pos) {
    this.color = color
    this.pos = pos
    this.move = function(direction) {/*...*/}
    this.rotate = function(direction) {/*...*/}
    this.accelerate = function() {/*...*/}
    this.checkCollision = function() {/*...*/}
  }
}

// well written class

class Sprite {
  constructor(color, pos) {
    this.color = color
    this.pos = pos
  }
	
  move(direction) {
    switch (direction.toUpperCase()) {
      case 'R':
        this.pos.x < 999 ? this.pos.x++ : this.pos.x = 0
        break
      case 'D':
        //...additional code
    }
  }
  //...other methods
}

