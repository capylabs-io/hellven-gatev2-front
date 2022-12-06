<template>
  <div class="mb-4">
    <div class="mb-2">Password strenth: <span :class="level">{{ level }}</span></div>
    <v-progress-linear v-if="level === 'Weak'" value="30" color="red" height="8px" rounded></v-progress-linear>
    <v-progress-linear v-else-if="level === 'Medium'" value="50" color="orange" height="8px" rounded></v-progress-linear>
    <v-progress-linear v-else value="80" color="green" height="8px" rounded></v-progress-linear>
  </div>
</template>

<script>
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const mediumPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.)[A-Za-z\d@$!%*?&]{8,}$/;
export default {
  props: ["password"],
  name: "PasswordStrength",
  data() {
    return {};
  },
  computed: {
    level() {
      if (strongPassword.test(this.password)) {
        return "Strong";
      } else if (mediumPassword.exec(this.password)) {
        return "Medium";
      } else {
        return "Weak";
      }
    },
  },
};
</script>
<style scoped>
.Strong {
  /* green */
  color: #34C02B;
}
.Medium {
  /* orange */
  color: #FF9A00;
}
.Weak {
  color: #D40C00;
}
</style>
