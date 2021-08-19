import { shallowMount } from '@vue/test-utils'
import Login from '../../src/views/Login'

describe('Login', () => {
  it.only('should render login without errors', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.find('legend').text()).toBe('Log into Launcher')
    // expect(bar.exists()).toBeTruthy()
  })

  // it('should show the logout button if user is logged in', async () => {
  //   const wrapper = shallowMount(AppHeader)
  //   wrapper.setData({ loggedIn: true })
  //
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.find('button').isVisible()).toBe(true)
  // })
})
