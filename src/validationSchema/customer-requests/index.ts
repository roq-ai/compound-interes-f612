import * as yup from 'yup';

export const customerRequestValidationSchema = yup.object().shape({
  request_period: yup.string().required(),
  customer_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
