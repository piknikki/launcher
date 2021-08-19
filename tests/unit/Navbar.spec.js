import { shallowMount } from '@vue/test-utils'
import Navbar from '../../src/components/Navbar'

describe('Navbar', () => {
  it.skip('should render navbar without errors', () => {
    const wrapper = shallowMount(Navbar)
    const txt = wrapper.find('.app-name').text()
    expect(txt).toEqual('Launcher')
  })

  // it('should show the logout button if user is logged in', async () => {
  //   const wrapper = shallowMount(AppHeader)
  //   wrapper.setData({ loggedIn: true })
  //
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.find('button').isVisible()).toBe(true)
  // })
})
