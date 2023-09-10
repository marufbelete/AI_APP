/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step1: FC = () => {
  return (
    <div className='w-100'>

        <div className='fv-row mb-10'>
        <label className='form-label required'>The job title you are applying for</label>

        <Field name='jobTitle' className='form-control form-control-lg form-control-solid h-60px' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='jobTitle' />
        </div>
      </div>

       <div className='fv-row mb-10 mt-3'>
        <label className='form-label'>Your resume </label>
        <Field
          as='textarea'
          name='resume'
          className='form-control form-control-lg form-control-solid'
          rows={6}
        ></Field>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='resume' />
        </div> */}
      </div>

      <div className='fv-row mb-10 mt-3'>
        <label className='form-label'>The skills/job experience you would like to highlight about yourself</label>

        <Field
          as='textarea'
          name='skillHighlight'
          className='form-control form-control-lg form-control-solid'
          rows={6}
        ></Field>
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='skillHighlight' />
        </div> */}
      </div>
      {/* <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Choose Account Type
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='personal'
              id='kt_create_account_form_account_type_personal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_account_type_personal'
            >
              <KTIcon iconName='address-book' className='fs-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Personal Account</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  If you need more info, please check it out
                </span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='corporate'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_corporate'
            >
              <KTIcon iconName='briefcase' className='fs-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Corporate Account</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  Create corporate account to mane users
                </span>
              </span>
            </label>
          </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
        </div>
      </div> */}
    </div> 
  )
}

export {Step1}
