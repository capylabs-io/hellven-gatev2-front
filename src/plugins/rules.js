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
      (v && v.length >= 8) ||
      !v ||
      "Your password must be at least 8 characters",
    (v) =>
      !v ||
      /^(?=.*[a-z])(?=.*\d)(?=.)[A-Za-z\d@$!%*?#]{8,32}$/.test(v) ||
      "Password allow only letter, numbers and special characters (@$!%*?#)",
    (v) =>
      (v && v.length <= 32) ||
      !v ||
      "Your password must be lower than or equal to 32 characters",
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
};

export const appRules = {};
