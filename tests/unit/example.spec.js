// 淺渲染
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('APP unit test', () => {
  it('addition function test', () => {
    const wrapper = shallowMount(App);
    // 測試 Vue 實體是否建立
    expect(wrapper.isVueInstance()).toBe(true);
    // 測試 calc function
    expect(wrapper.vm.calc(3, 5)).toBe(8);
  });
});
