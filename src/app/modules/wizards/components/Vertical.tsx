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
import {createAccountSchemas, ICreateCoverLetter, inits} from './CreateAccountWizardHelper copy'
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
  console.log(stepper?.current?.currentStepIndex,stepper.current?.totalStepsNumber)  

    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber-1) {
      stepper.current.goNext()
    } else {
      // stepper.current.goto(1)
      // actions.resetForm()
      console.log("send api")
      setCoverLetter('')
       generateCoverLetter({
      job_title:values.jobTitle,
      company_name:values.companyName,
      skill_highlight:values.skillHighlight
    })
    stepper.current.goNext()
    // const fetchData = async () => {
    //   await fetchEventSource(SSE_URL, {
    //     method: "POST",
    //     body:JSON.stringify({
    //       job_title:"nodejs developer",
    //       company_name:"google",
    //       skill_highlight:"API developmetn"
    //     }),
    //     headers: {
    //       Accept: "text/event-stream",
    //       "Content-Type": "application/json"
          
    //     },
    //     onmessage(event) {
    //       console.log(event.data);
    //       const parsedData = JSON.parse(event.data);
    //       setCoverLetter((data) => data+parsedData);
    //     },
    //     onclose() {

    //       console.log("Connection closed by the server");
    //     },
    //     onerror(err) {
    //       throw err
    //       console.log("There was an error from server", err);
    //     },
    //   });
    // };
    // fetchData();
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
    <div className='card'>
      <div className='card-body'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Personal Info</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Job Info</h3>
            </div>

           <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Cover Letter</h3>
            </div>
 {/* 
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Billing Details</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Completed</h3>
            </div> */}
          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
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
               
{/* 
                <div data-kt-stepper-element='content'>
                  <Step5 />
                </div> */}

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
    </div>
  )
}

export {Vertical}
