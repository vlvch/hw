import * as yup from 'yup';

async function validation(data) {
  let userSchema = yup.object({
    email: yup.string().required('Не введена почта').email(),
    password: yup.string().required('Не введен пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .max(16, 'Максимальная длина пароля 16 символов')
  })
  let parsedData = await userSchema.validate(data);
  return parsedData;
}

export default validation;