/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { BarWave } from "react-cssfx-loading";

interface Step6Props {
  coverLetter: string;
}
const Step6: FC <Step6Props>= ({coverLetter}) => {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) {
      return
    }

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [copied])
  return (
    <div className='w-100'>
 <div className='d-flex flex-center'>
 {coverLetter?
    <div>
    <h2 className='fw-bolde text-dark'>Generated Letter</h2>
      <div className='card card-body bg-dark w-800px min-h-450px'>
      <div className='text-gray-400 fw-bold fs-4 d-flex justify-content-end p-0'>
            <CopyToClipboard text={coverLetter} onCopy={() => setCopied(true)}>
            <a className='highlight-copy btn'>{copied ? 'copied' : <i className="far fa-copy text-primary"></i>}</a>
          </CopyToClipboard>
            </div>
          <div className='text-gray-400 fw-bold fs-4 mt-2 mb-10'>
         {coverLetter}
      </div>
      </div>
        </div>:
       <BarWave  />

}
  </div>

    </div> 
  
  )
}

export {Step6}
