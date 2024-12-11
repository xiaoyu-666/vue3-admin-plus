import { expect, test } from 'vitest'
import {
  isExternal,
  isPassword,
  isNumber,
  isName,
  isIP,
  isUrl,
  isLowerCase,
  isUpperCase,
  isAlphabets,
  isString,
  isArray,
  isPort,
} from '../validate'

test('isPort', () => {
  expect(isPort('80')).toBe(true)
  expect(isPort('s40')).toBe(false)
})

test('isArray', () => {
  expect(isArray('SS')).toBe(false)
  expect(isArray(' ')).toBe(false)
  expect(isArray([])).toBe(true)
  expect(isArray(['', 2, '34'])).toBe(true)
})

test('isString', () => {
  expect(isString('sss')).toBe(true)
  expect(isString('sDD')).toBe(true)
  expect(isString('s d')).toBe(true)
  expect(isString('Ss')).toBe(true)
  expect(isString('SS')).toBe(true)
  expect(isString(1234)).toBe(false)
  expect(isString(' ')).toBe(true)
})

test('isAlphabets', () => {
  expect(isAlphabets('sss')).toBe(true)
  expect(isAlphabets('sDD')).toBe(true)
  expect(isAlphabets('s d')).toBe(false)
  expect(isAlphabets('Ss')).toBe(true)
  expect(isAlphabets('SS')).toBe(true)
})

test('isUpperCase', () => {
  expect(isUpperCase('sss')).toBe(false)
  expect(isUpperCase('sDD')).toBe(false)
  expect(isUpperCase('s d')).toBe(false)
  expect(isUpperCase('Ss')).toBe(false)
  expect(isUpperCase('SS')).toBe(true)
})

test('isLowerCase', () => {
  expect(isLowerCase('sss')).toBe(true)
  expect(isLowerCase('sDD')).toBe(false)
  expect(isLowerCase('s d')).toBe(false)
})

test('isUrl', () => {
  expect(isUrl('https://www.vitest.com/')).toBe(true)
  expect(isUrl('https://www.vitest.edu/')).toBe(true)
})

test('isExternal', () => {
  expect(isExternal('https://cn.vitest.dev/guide/')).toBe(true)
  expect(isExternal('tel://cn.vitest.dev/guide/')).toBe(true)
  expect(isExternal('mailto:1111')).toBe(true)
})

test('isPassword', () => {
  expect(isPassword('1')).toBe(false)
  expect(isPassword('123456')).toBe(true)
})

test('isNumber', () => {
  expect(isNumber('s1')).toBe(false)
  expect(isNumber('1 0 s')).toBe(false)
  expect(isNumber('123456')).toBe(true)
})

test('isName', () => {
  expect(isName('s1')).toBe(true)
  expect(isName('1 0 s')).toBe(false)
  expect(isName('123456')).toBe(true)
  expect(isName('12*23')).toBe(false)
})

test('isIP', () => {
  expect(isIP('127.0.0.1')).toBe(true)
  expect(isIP('1 0 s')).toBe(false)
  expect(isIP('192.168.0.1')).toBe(true)
  expect(isIP('localhost')).toBe(false)
  expect(isIP('10.15.204.12')).toBe(true)
})
