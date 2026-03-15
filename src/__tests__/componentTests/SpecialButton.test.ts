import { mount } from '@vue/test-utils'

import SpecialButton from '../../components/SpecialButton.vue'

describe('SpecialButton.vue', () => {
  it('renders label correctly', () => {
    const wrapper = mount(SpecialButton, {
      props: {
        label: 'Click me',
      },
    })

    expect(wrapper.text()).toContain('Click me')
  })

  it('emits proper click event', async () => {
    const wrapper = mount(SpecialButton, {
      props: { label: 'Click' },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('clicked')
  })
})
