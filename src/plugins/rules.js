export const rules = {
  required: [
    (v) =>
      (!!v && (typeof v !== "string" || !!v.trim())) ||
      v === 0 ||
      "This is required field",
  ],
  checkIdentifier: [
    (v) =>
      (!!v && (typeof v !== "string" || !!v.trim())) ||
      v === 0 ||
      "Please input your email or your phone",
    (v) =>
      (v &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v.trim()
        )) ||
      (v.length >= 10 &&
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/gi.test(v)) ||
      !v ||
      "Email (or phone number) is not valid",
  ],
  email: [
    (v) =>
      (!!v && (typeof v !== "string" || !!v.trim())) ||
      v === 0 ||
      "Please input Email",
    (v) =>
      (v &&
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v.trim()
        )) ||
      !v ||
      "Email is not valid",
  ],
  password: [
    (v) =>
      (!!v && (typeof v !== "string" || !!v.trim())) ||
      v === 0 ||
      "Please input Password",
    (v) =>
      !v ||
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        v
      ) ||
      "Password is not vaid",
  ],
  phone: [
    (v) =>
      (!!v && (typeof v !== "string" || !!v.trim())) ||
      v === 0 ||
      "Please input Phone number",
    (v) =>
      !v ||
      (v.length >= 10 &&
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/gi.test(v)) ||
      "Phone is not valid",
  ],
  equal:[ (target) => (v) =>
    !v || target === v || `Must be equal to ${target}`],
};

export const appRules = {};
