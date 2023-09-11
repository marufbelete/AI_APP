import * as Yup from 'yup'

export interface ICreateFieldInfo {
  field:string,
  training:string,
 
}

const createFieldFilterSchemas = [
  Yup.object({
    field: Yup.string().required().label('field'),
    training: Yup.string().required().label('training'),
  }),
]

const inits: ICreateFieldInfo = {
  field:'',
  training:'',
}

export {createFieldFilterSchemas, inits}
