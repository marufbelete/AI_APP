import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {Step6} from './steps/Step6'
import {KTIcon} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {createAccountSchemas, ICreateCoverLetter, inits} from './CreateAccountWizardHelper'
import { useGenerateCoverLetterMutation } from '../../../service/user_api'

const Vertical = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateCoverLetter>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [generateCoverLetter,{data,isLoading,isError,error,isSuccess}]=useGenerateCoverLetterMutation()
  const [coverLetter, setCoverLetter] = useState('');
  const [showSnippet, setShowSnippet] = useState(false);
  
 

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    setCoverLetter('')
    stepper.current.goPrev()
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
    setSubmitButton(stepper.current.currentStepIndex+1 === stepper.current.totalStepsNumber)
  }

  const submitStep = (values: ICreateCoverLetter, actions: FormikValues) => {
  btnRef.current?.setAttribute('data-kt-indicator', 'on');
  // console.log(stepper?.current?.currentStepIndex,stepper.current?.totalStepsNumber)  

    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber-1) {
      stepper.current.goNext()
    } else {
      setCoverLetter('')
       generateCoverLetter({
      job_title:values.jobTitle,
      company_name:values.companyName,
      resume:values.resume,
      job_description:values.jobDescription

      // skill_highlight:values.skillHighlight,
      // full_name:values.fullName,
      // year_experince:values.yearExperince,
    })
    stepper.current.goNext()

    }

    setSubmitButton(stepper.current.currentStepIndex+1 === stepper.current.totalStepsNumber)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
   
  }
  useEffect(()=>{
    btnRef.current?.removeAttribute("data-kt-indicator");
    if(isSuccess){
      
      setCoverLetter(data)
      setShowSnippet(!showSnippet);
    }
    },[data])

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [stepperRef])

  // useEffect(() => {
    
  // }, []);


  return (
    // <div className='card'>
    //   <div className='card-body'>
    //     <div
    //       ref={stepperRef}
    //       className='stepper stepper-links d-flex flex-column pt-15'
    //       id='kt_create_account_stepper'
    //     >
    //       <div className='stepper-nav mb-5'>
    //         <div className='stepper-item current' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Personal Info</h3>
    //         </div>

    //         <div className='stepper-item' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Job Info</h3>
    //         </div>

    //        <div className='stepper-item' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Cover Letter</h3>
    //         </div>
    //       </div>
    <div
    ref={stepperRef}
    className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
    id='kt_create_account_stepper'
  >
    {/* begin::Aside*/}
    <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
      {/* begin::Wrapper*/}
      <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
        {/* begin::Nav*/}
        <div className='stepper-nav'>
          {/* begin::Step 1*/}
          <div className='stepper-item current' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>1</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Personal Info</h3>
                <div className='stepper-desc fw-semibold'>Add Your Personal Details</div>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 1*/}

          {/* begin::Step 2*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>2</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Job Info</h3>
                <div className='stepper-desc fw-semibold'>Add Your Job Info</div>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 2*/}

          {/* begin::Step 3*/}
          <div className='stepper-item' data-kt-stepper-element='nav'>
            {/* begin::Wrapper*/}
            <div className='stepper-wrapper'>
              {/* begin::Icon*/}
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>3</span>
              </div>
              {/* end::Icon*/}

              {/* begin::Label*/}
              <div className='stepper-label'>
                <h3 className='stepper-title'>Cover Letter</h3>
                <div className='stepper-desc fw-semibold'>Get Professional Cover Letter</div>
              </div>
              {/* end::Label*/}
            </div>
            {/* end::Wrapper*/}

            {/* begin::Line*/}
            <div className='stepper-line h-40px'></div>
            {/* end::Line*/}
          </div>
          {/* end::Step 3*/}
        </div>
        {/* end::Nav*/}
      </div>
      {/* end::Wrapper*/}
    </div>
    {/* begin::Aside*/}
    <div className='d-flex flex-row-fluid flex-center bg-body rounded'>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
   
              <Form className='py-20 w-100 w-xl-700px px-9' id='kt_create_account_form'>
                {/* <div className='current' data-kt-stepper-element='content'>
                  <Step1 />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step2 />
                </div> */}
                
                <div className='current' data-kt-stepper-element='content'>
                  <Step3 />
                </div>
                <div data-kt-stepper-element='content'>
                  <Step1 />
                </div>
                <div data-kt-stepper-element='content'>
                  <Step6 coverLetter={coverLetter} title="Cover Letter"/>
                </div>

                <div className='d-flex flex-stack pt-15'>
                {!isLoading &&<div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                      Back
                    </button>
                  </div>}


                 {!isLoading && !coverLetter && <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Continue'}
                        {isSubmitButton && 'Generate'}
                        <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                      </span>
                    </button>
                  </div>}

                  {/* <div>
                    <button ref={btnRef} type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                      {!isSubmitButton && 'Continue'}
                        {isSubmitButton && 'Generate'}
                      
                        <span className="indicator-label">Generate</span>
                        <span className="indicator-progress">Please wait... 
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                        {!isLoading&&<KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />}
                        </span>
                    </button>
                  </div> */}
                </div>
              </Form>
            )}
          </Formik>       
        
      </div>
        </div>
    // </div>
  )
}

export {Vertical}
