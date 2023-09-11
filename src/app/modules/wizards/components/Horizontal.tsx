import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step6} from './steps/Step6'
import {KTIcon} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {ICreateFieldInfo,createFieldFilterSchemas, inits} from './CreateFieldInfo'
import { useGenerateFieldInfoMutation } from '../../../service/user_api'
const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createFieldFilterSchemas[0])
  const [initValues] = useState<ICreateFieldInfo>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [generateFieldInfo,{data,isLoading,isError,error,isSuccess}]=useGenerateFieldInfoMutation()
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
    setCurrentSchema(createFieldFilterSchemas[stepper.current.currentStepIndex - 1])
    setSubmitButton(stepper.current.currentStepIndex+1 === stepper.current.totalStepsNumber)
  }

  const submitStep = (values: ICreateFieldInfo, actions: FormikValues) => {
    console.log(stepper?.current?.currentStepIndex,stepper.current?.totalStepsNumber)  
    console.log(values)  
  btnRef.current?.setAttribute('data-kt-indicator', 'on');
 
  if (!stepper.current) {
    return
  }

  if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber-1) {
    console.log("send api")
    stepper.current.goNext()
  } else {
    // stepper.current.goto(1)
    // actions.resetForm()
    console.log("send api")
    setCoverLetter('')
    generateFieldInfo({
      field:values.field,
      training:values.training,
    })
  stepper.current.goNext()
    // if (!stepper.current) {
    //   return
    // }

    // if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
    //   stepper.current.goNext()
    // } else {
    //   stepper.current.goto(1)
    //   actions.resetForm()
    // }

    setSubmitButton(stepper.current.currentStepIndex+1 === stepper.current.totalStepsNumber)

    setCurrentSchema(createFieldFilterSchemas[stepper.current.currentStepIndex - 1])
  }
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
  //   if (!stepperRef.current) {
  //     return
  //   }

  //   loadStepper()
  // }, [stepperRef])
  // const [copied, setCopied] = useState(false)
  // useEffect(() => {
  //   if (!copied) {
  //     return
  //   }

  //   setTimeout(() => {
  //     setCopied(false)
  //   }, 1500)
  // }, [copied])

  return (
    <div className='card'>
      <div className='card-body'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-10'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Details</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Field Info</h3>
            </div>
{/* 
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Business Info</h3>
            </div>

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
                </div>

                <div data-kt-stepper-element='content'>
                  <Step4 />
                </div> */}

                <div className='current' data-kt-stepper-element='content'>
                  <Step4 />
                </div>
                <div data-kt-stepper-element='content'>
                  <Step6 coverLetter={coverLetter} title="Field Information"/>
                </div>
{/* 
                <div data-kt-stepper-element='content'>
                  <Step5 />
                </div> */}

                <div className='d-flex flex-center pt-15'>
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
                </div>
              </Form>
            )}
          </Formik> 
        
      </div>
        </div>
    </div>
  )
}

export {Horizontal}
