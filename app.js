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
  el: '#app',
  data: {
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
  }
});
