import Vue from 'vue'
import AboutView from '@/components/AboutView'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AboutView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.about p').textContent)
      .to.equal('About')
  })
})
