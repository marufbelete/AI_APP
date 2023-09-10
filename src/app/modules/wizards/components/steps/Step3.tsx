import React, {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>AI COVER LETTER WRITER</h2>

        <div className='text-gray-400 fw-bold fs-6 mt-5'>
        Generate a professional cover letter in seconds! Just provide the job title, name of the company, and the skills/job experience you would like to highlight about yourself.
          {/* <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a> */}
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Your Full Name</label>

        <Field name='fullName' className='form-control form-control-lg form-control-solid h-60px' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='fullName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Year Of Experince</label>
        <Field name='yearExperince' className='form-control form-control-lg form-control-solid h-60px' />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='Experince' />
        </div> */}
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>The name of the company</span>
        </label>

        <Field
          name='companyName'
          className='form-control form-control-lg form-control-solid h-60px'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='companyName' />
        </div>

        {/* <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div> */}
      </div>

      {/* <div className='fv-row mb-10'>
        <label className='form-label required'>Corporation Type</label>

        <Field
          as='select'
          name='businessType'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='1'>S Corporation</option>
          <option value='1'>C Corporation</option>
          <option value='2'>Sole Proprietorship</option>
          <option value='3'>Non-profit</option>
          <option value='4'>Limited Liability</option>
          <option value='5'>General Partnership</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessType' />
        </div>
      </div> */}

      

    

      {/* <div className='fv-row mb-0'>
        <label className='fs-6 fw-bold form-label required'>Contact Email</label>

        <Field name='businessEmail' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessEmail' />
        </div>
      </div> */}
    </div>
  )
}

export {Step3}
