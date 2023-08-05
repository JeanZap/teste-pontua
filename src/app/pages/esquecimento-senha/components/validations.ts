import * as yup from 'yup';

export const EmailValidation = yup.string().email('E-mail inválido').required('Usuário obrigatório.');

