const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = 
require('../src/math')

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3)

  expect(total).toBe(13) // same as the function below

  // if (total != 13) {
  //   throw new Error(`Total tip should be 13. Got ${total}`)
  // }
})

test('SHould calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Should convert Fahrenheits to Celsius', () => {
  expect(fahrenheitToCelsius(32)).toBe(0)
})

test('Should convert Celsius to Fahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBe(32)
})
