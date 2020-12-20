const PlanPickerItemComponent = {
  template: '#plan-picker-item-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    }
  },
  methods: {
    select: function () {
      this.$emit('select', this.name);
    }
  }
};

const PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    PlanPickerItem: PlanPickerItemComponent
  },
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'The Circus'
        },
        {
          id: 2,
          name: 'The Sinatra'
        },
        {
          id: 3,
          name: 'The Corinthium'
        }
      ],
      selectedPlan: null
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    }
  }
};

new Vue({
  el: '#app',
  components: {
    PlanPicker: PlanPickerComponent
  }
});
