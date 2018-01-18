// @flow

const MONTHS: Array<string> = [
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

export default {
  MONTHS
}

export const GRAPH_URL = process.env.NODE_ENV === 'production' ? '//ad.aeweb.io/graphql' : '//localhost:4000/graphql'
