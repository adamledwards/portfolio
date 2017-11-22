// @flow

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]



export function getYears (): Array<{value: number}> {
  const date: Date = new Date()
  let value = date.getFullYear()
  const end = value - 10
  const options = []
  for (; end <= value; value--) {
    options.push({value})
  }
  return options
}

export function getMonth (): Array<{value: number, label: string}> {
  const months = 12
  const options = []
  for (let value = 0; value < months; value++) {
    options.push({value, label: MONTHS[value]})
  }
  return options
}

export function getDays (): Array<{value: number}> {
  let value = 31
  const options = []
  for (; value >= 1; value--) {
    options.push({value})
  }
  return options
}
