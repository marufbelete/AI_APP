import * as Yup from 'yup'

export interface ICreateCoverLetter {
  jobTitle:string,
  companyName:string,
  skillHighlight:string,
  fullName:string,
  resume:string,
  yearExperince:string
}

const createAccountSchemas = [
  Yup.object({
    fullName: Yup.string().required().label('full name'),
    companyName: Yup.string().required().label('company name'),
    // : Yup.string().required().label('company name'),
  }),
  Yup.object({
    jobTitle: Yup.string().required().label('job title'),
    skillHighlight: Yup.string().required().label('skill highlight'),
    // resume: Yup.string().required().label('resume'),
  }),
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
  skillHighlight:'',
  fullName:'',
  resume:'',
  yearExperince:''


}

export {createAccountSchemas, inits}
