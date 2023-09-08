import * as Yup from 'yup'

export interface ICreateCoverLetter {
  jobTitle:string,
  companyName:string,
  skillHighlight:string
}

const createAccountSchemas = [
  Yup.object({
    jobTitle: Yup.string().required().label('jobTitle'),
    companyName: Yup.string().required().label('jobTitle'),
    skillHighlight: Yup.string().required().label('jobTitle'),
  }),
  // Yup.object({
  //   accountName: Yup.string().required().label('Account Name'),
  // }),
  // Yup.object({
  //   businessName: Yup.string().required().label('Business Name'),
  //   businessDescriptor: Yup.string().required().label('Shortened Descriptor'),
  //   businessType: Yup.string().required().label('Corporation Type'),
  //   businessEmail: Yup.string().required().label('Contact Email'),
  // }),
  // Yup.object({
  //   nameOnCard: Yup.string().required().label('Name On Card'),
  //   cardNumber: Yup.string().required().label('Card Number'),
  //   cardExpiryMonth: Yup.string().required().label('Expiration Month'),
  //   cardExpiryYear: Yup.string().required().label('Expiration Year'),
  //   cardCvv: Yup.string().required().label('CVV'),
  // }),
]

const inits: ICreateCoverLetter = {
  jobTitle:'',
  companyName:'',
  skillHighlight:''

}

export {createAccountSchemas, inits}
