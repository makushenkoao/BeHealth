const maxLength = (num: number) => `Максимальна довжина поля ${num} символів`;

const passwordValidation = {
  required: "Будь ласка, введіть пароль",
  minLength: {
    value: 8,
    message: "Мінімальна довжина поля 8 символів",
  },
  maxLength: {
    value: 15,
    message: maxLength(15),
  },
};

const validationRules = {
  firstName: {
    required: "Будь ласка, вкажіть ім’я",
    minLength: {
      value: 2,
      message: "Мінімальна довжина поля 2 символи",
    },
    maxLength: {
      value: 80,
      message: maxLength(80),
    },
  },

  email: {
    required: "Будь ласка, введіть e-mail адресу",
    maxLength: {
      value: 128,
      message: maxLength(128),
    },
    pattern: {
      value:
        /^([a-z0-9&'*+._%-]+(\.[a-z0-9&'*+._%-]+)*)@[a-z0-9]+\.[a-z]{2,}$/i,
      message: "Будь ласка, введіть коректну e-mail адресу",
    },
  },

  loginPassword: passwordValidation,

  newPassword: {
    ...passwordValidation,
    pattern: {
      value:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()\-_=+[\]{}\\|;:'",./<>?]).+$/,
      message:
        "Пароль повинен містити велику і маленьку літери, 1 цифру та 1 спец.символ",
    },
  },

  confirmPassword: (password: string) => ({
    required: "Будь ласка, введіть пароль ще раз.",
    validate: (value: string) => value === password || "Паролі не збігаються",
  }),

  mobileNumber: {
    required: "Будь ласка, введіть номер телефону.",
    pattern: {
      value: /^380(?:[679]3|6[78]|9[678]|50|66|39)\d{7}$/,
      message: "Будь ласка, введіть коректний номер",
    },
  },
};

export { validationRules };
