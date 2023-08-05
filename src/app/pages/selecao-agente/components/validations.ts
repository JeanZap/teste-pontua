import * as yup from 'yup';
import { LoginRequestDto } from '../../../../models/LoginRequestDto';

export const LoginRequestValidation: yup.Schema<LoginRequestDto> = yup.object().shape({
  usuario: yup.string().email('E-mail inválido').required('Usuário obrigatório.'),
  senha: yup
    .string()
    .required('Senha obrigatória.')
    .min(8, 'A senha deve ter mais de 8 caracteres.')
    .matches(/[a-zA-Z0-9]/, 'A senha deve conter apenas caracteres latinos e números.')
});

