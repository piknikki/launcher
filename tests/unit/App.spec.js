import App from '../../src/App'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(App)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })
})
// describe('App.tests.js', () => {
//   test('if this works', () => {
//     expect(true).toBe(true)
//   })
//   // let cmp
//   //
//   // beforeEach(() => {
//   //   cmp = shallowMount(App)
//   //   cmp.setData({ messages: ['Cat'] })
//   // })
//   //
//   // it('equals messages to ["Cat"]', () => {
//   //   expect(cmp.vm.messages).toEqual(['Cat'])
//   // })
//   //
//   // it('has the expected html structure', () => {
//   //   expect(cmp.element).toMatchSnapshot()
//   // })
// })
