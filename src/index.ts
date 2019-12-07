import { concat } from 'ramda'

export default function main(): string {
  return concat(concat('hello', ' '), 'world')
}

console.log(main())
