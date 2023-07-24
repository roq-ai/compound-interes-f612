import * as yup from 'yup';

export const compoundInterestValidationSchema = yup.object().shape({
  interest_rate: yup.number().required(),
  principal_amount: yup.number().required(),
  time_period: yup.number().integer().required(),
  compounding_frequency: yup.string().required(),
  organization_id: yup.string().nullable(),
});
