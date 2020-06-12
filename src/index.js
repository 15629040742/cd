import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/assets/fonts/iconfont.css'

import yhButton from './components/button/yhButton'
import yhDialog from './components/dialog/yhDialog.vue'
import yhSwitch from './components/switch/yhSwitch.vue'
import yhInput from './components/input/yhInput.vue'
import yhCalendar from './components/calendar/yhCalendar.vue'
import yhRadio from './components/radio/yhRadio.vue'
import yhRadioGroup from './components/radio/yhRadioGroup.vue'
import yhCheckbox from './components/checkbox/yhCheckbox.vue'
import yhCheckboxGroup from './components/checkbox/yhCheckboxGroup.vue'
import yhForm from './components/form/yhForm.vue'
import yhFormItem from './components/form/yhFormItem.vue'

const components = [
    yhButton,
    yhDialog,
    yhSwitch,
    yhInput,
    yhCalendar,
    yhRadio,
    yhRadioGroup,
    yhCheckbox,
    yhCheckboxGroup,
    yhForm,
    yhFormItem
  ]

Vue.use(ElementUI);

const shotCat = {
    // 必须得有install方法
    install(Vue, options) {
      Object.values(components).forEach((component) => {
        Vue.component(component.name, component)
      })
    },
  }
  
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(shotCat)
  }
  
  export default shotCat