/* eslint-env jest */
import { resizeContainer, templatingLoop, render, escapeSpecialChars as escape } from '../src/javascripts/lib/helpers'
import createRangePolyfill from './polyfills/createRange'

if (!document.createRange) {
  createRangePolyfill()
}

const client = {
  invoke: jest.fn()
}
const dataSet = [1, 2, 3]
function mockGetTemplate (item) {
  return `${item}-`
}

describe('resizeContainer', () => {
  it('client.invoke has been called', () => {
    resizeContainer(client)
    expect(client.invoke).toHaveBeenCalled()
  })
})

describe('templatingLoop', () => {
  it('generate html with data set and template function', () => {
    expect(templatingLoop(dataSet, mockGetTemplate, '-')).toBe('-1-2-3-')
  })

  it('return empty string if data set and initial value is empty', () => {
    expect(templatingLoop([], mockGetTemplate)).toBe('')
  })
})

describe('render', () => {
  it('should replace target dom node with the given HTML string', () => {
    document.body.innerHTML = '<div id="placeholder"></div>'
    expect(document.querySelectorAll('#placeholder').length).toBe(1)

    render('#placeholder', '<div id="app"></div>')
    expect(document.querySelectorAll('#placeholder').length).toBe(0)
    expect(document.querySelectorAll('#app').length).toBe(1)
  })
})