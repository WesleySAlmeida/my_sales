import { celebrate, Joi, Segments } from "celebrate";

export const UpdateUserSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().optional(),
    old_password: Joi.string(),
    password_confirmation: Joi.string().valid(Joi.ref('password')).when('password', {
      is: Joi.exist(),
      then: Joi.required(),
    }),
  }),
});
