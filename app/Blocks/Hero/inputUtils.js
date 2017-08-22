// @flow
import CONSTANTS from './constants.js'

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
    options.push({value, label: CONSTANTS.MONTHS[value]})
  }
  return options
}
