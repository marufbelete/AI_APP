/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { BarWave } from "react-cssfx-loading";

interface Step6Props {
  coverLetter: string;
  title:string;
}
const Step6: FC <Step6Props>= ({coverLetter,title}) => {
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
 <div className='fv-row mb-10'>
 {coverLetter?
    <div>
    <h2 className='fw-bolde text-dark'>{title}</h2>
      <div className='card card-body bg-dark  min-h-250px'>
      <div className='text-gray-400 fw-bold fs-4 d-flex justify-content-end p-0'>
            <CopyToClipboard text={coverLetter} onCopy={() => setCopied(true)}>
            <a className='highlight-copy btn'>{copied ? 'copied' : <i className="far fa-copy text-primary"></i>}</a>
          </CopyToClipboard>
            </div>
          <div className='text-gray-400 fw-bold fs-4 mt-2 mb-10'>
         {coverLetter?.split('<br>').map((e,i,arr)=>{
          if(i==0)e.replace(/\./g, "");
          if(i==arr.length-2){
            return <div>{e}</div>
          }
         return <div className='mb-4'>{e}</div>
          })}
      </div>
      </div>
        </div>:
        <div className='d-flex flex-center'>
       <BarWave  />
       </div>

}
  </div>

    </div> 
  
  )
}

export {Step6}
