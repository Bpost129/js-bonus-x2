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

console.log('Code BEFORE the forEach...')

setTimeout(function() {
  colors.forEach((color, idx) => {
    console.log(`${idx + 1} - ${color}`)
  })
}, 1000)

console.log('Code AFTER the forEach...')


// async demo

const lightSequence = [
  {color: 'red', time: 3000},
  {color: 'yellow', time: 1000},
  {color: 'green', time: 2000},
]