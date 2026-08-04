import {Joi, celebrate, Segments} from 'celebrate';

export const sessionSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
})
