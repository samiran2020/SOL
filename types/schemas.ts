import * as Yup from 'yup';

export const loginGetOTPSchema = Yup.object({
    email: Yup.string().email().nullable(),
});
