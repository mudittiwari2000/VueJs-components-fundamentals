Vue.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'The Circus'
        },
        {
          id: 2,
          name: 'The Sintra'
        },
        {
          id: 3,
          name: 'The Corinthium'
        }
      ]
    };
  }
});

Vue.component('plan', {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});

new Vue({
  el: '#app'
});
