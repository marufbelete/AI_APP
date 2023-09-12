import React, {FC, useEffect,useState} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { useGetFieldsQuery, useGetTrainingsQuery } from '../../../../service/user_api'
import { useField,useFormikContext } from 'formik';



const Step4: FC = () => {
  interface FormValues {
    field: string; 
  }
  const { values } = useFormikContext<FormValues>();
  const {data}= useGetFieldsQuery('')
  const {data:trainingData,isFetching,refetch}= useGetTrainingsQuery({
    field:values.field
   })

  useEffect(()=>{
   refetch()
  },[values.field])
  return (
    <div className='w-100'>
       <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>AI COVER LETTER WRITER</h2>
        <div className='text-gray-400 fw-bold fs-6 mt-3'>
        Generate a professional cover letter in seconds! Just provide the job title, name of the company, and the skills/job experience you would like to highlight about yourself.
        </div>
      </div>
      {/* <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Billing Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='text-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div> */}
{/* 
      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>Name On Card</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title="Specify a card holder's name"
          ></i>
        </label>

        <Field
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='nameOnCard'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='nameOnCard' />
        </div>
      </div> */}
{/* 
      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='required fs-6 fw-bold form-label mb-2'>Card Number</label>

        <div className='position-relative'>
          <Field
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter card number'
            name='cardNumber'
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='cardNumber' />
          </div>

          <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
            <img src={toAbsoluteUrl('/media/svg/card-logos/visa.svg')} alt='' className='h-25px' />
            <img
              src={toAbsoluteUrl('/media/svg/card-logos/mastercard.svg')}
              alt=''
              className='h-25px'
            />
            <img
              src={toAbsoluteUrl('/media/svg/card-logos/american-express.svg')}
              alt=''
              className='h-25px'
            />
          </div>
        </div>
      </div> */}

     
        <div className='d-flex flex-column fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Field/Department</label>
          <div className='row fv-row mb-2'>
          <Field as='select' name='field' className='form-select form-select-solid h-60px pb-3'>
            <option value={''}>Select Field</option>
            {data?.map((field, index) => (
              <option key={index} value={field}>{field}</option>
            ))}
          </Field>
              
              <div className='text-danger mt-2'>
                <ErrorMessage name='field' />
             </div>
            </div>

          <div className='d-flex flex-column fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Training/Opportunity</label>
          <div className='row fv-row'>
              <Field as='select' name='training' className='form-select form-select-solid h-60px'>
                <option value={''}>Select training</option>
                {trainingData?.map((field, index) => (
              <option key={index} value={field}>{field}</option>
            ))}
                {/* <option value='BAS Agent Registration Skill Set'>BAS Agent Registration Skill Set</option>
                <option value='Certificate III in Accounts Administration'>Certificate III in Accounts Administration</option>
                <option value='Certificate IV in Accounting and Bookkeeping'>Certificate IV in Accounting and Bookkeeping</option>
                <option value='Certificate IV in Leadership and Management'>Certificate IV in Leadership and Management</option>
                <option value='Certificate IV in Project Management Practice'>Certificate IV in Project Management Practice</option>
                <option value='Diploma of Business'>Diploma of Business</option>
                <option value='Diploma of Leadership and Management'>Diploma of Leadership and Management</option>
                <option value='Diploma of Project Management'>Diploma of Project Management</option>
                <option value='Certificate III in Business'>Certificate III in Business</option>
                <option value='Certificate IV in Cyber Security'>Certificate IV in Cyber Security</option>
                <option value='Certificate III in Information Technology'>Certificate III in Information Technology</option> */}
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='training' />
              </div>
          </div>
        </div>
{/* 
        <div className='col-md-4 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>CVV</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter a card CVV code'
            ></i>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              minLength={3}
              maxLength={4}
              placeholder='CVV'
              name='cardCvv'
            />
            <div className='text-danger mt-2'>
              <ErrorMessage name='cardCvv' />
            </div>

            <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
              <KTIcon iconName='credit-cart' className='fs-2hx' />
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className='d-flex flex-stack'>
        <div className='me-5'>
          <label className='fs-6 fw-bold form-label'>Save Card for further billing?</label>
          <div className='fs-7 fw-bold text-gray-400'>
            If you need more info, please check budget planning
          </div>
        </div>

        <label className='form-check form-switch form-check-custom form-check-solid'>
          <Field className='form-check-input' type='checkbox' value='1' checked={true} />
          <span className='form-check-label fw-bold text-gray-400'>Save Card</span>
        </label>
      </div> */}
    </div>
  )
}

export {Step4}
