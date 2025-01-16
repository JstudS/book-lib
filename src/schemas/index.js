import * as yup from 'yup'

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,}$/

export const titleTextSchema = yup.object().shape({
    text: yup.string().required('Опис не може бути відсутнім')
})

export const titleInfoSchema = yup.object().shape({
    info: yup.array(
        yup.object({
            description: yup.string().required('Поле не може бути порожнім')
        })
    )
})

export const authSchema = yup.object().shape({
    email: yup.string().email('Будь ласка введіть коректну пошту').required('Пошта не може бути відсутня'),
    password: yup
        .string()
        .matches(passwordRules, {message: 'Пароль повинен містити мінімум 1 велику букву, 1 маленьку букву і 1 цифру'})
        .required('Пароль не може бути відсутнім')
})