import * as Joi from "joi";

export const carValidator=Joi.object({
    brand:Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required()
        .messages({'string.pattern.base':'enter brand like "Opel"'}),
    year:Joi.number().min(1990).max(2026).required().integer()
        .messages({'number.min':'min year is 1990','number.max':'max year is 2026'}),
    price:Joi.number().min(0).max(1000000).required().integer()
        .messages({'number.min':'min prise is 0','number.max':'max prise is 1 000 000'})

})
