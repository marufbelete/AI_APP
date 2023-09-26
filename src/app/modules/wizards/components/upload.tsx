/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useEffect, useState} from 'react'
import { useDeleteFileMutation, useReadFileQuery, useUpdateFileMutation, useUploadFileMutation } from '../../../service/user_api';
import { BarWave } from 'react-cssfx-loading';
  /* eslint-disable jsx-a11y/anchor-is-valid */
  import React, {useEffect, useRef,useState} from 'react'
  // import {KTIcon} from '../../../helpers'
  import {KTIcon} from '../../../../_metronic/helpers'

  
  type Props = {
    className: string
  }   

// interface File {
//   name:string;
// }
const Upload = () => {
  const {data,refetch}=useReadFileQuery('')
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [uploadFileMutation,{isError,isLoading,isSuccess}] = useUploadFileMutation();
    const [updateFileMutation, {isSuccess:updateSuccess}] =useUpdateFileMutation();
    const [deleteFileMutation,{isSuccess:deleteSuccess}] = useDeleteFileMutation();
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleFileUpdate = (event) => {
      const file = event.target.files[0];
      const rowId = event.target.dataset.rowId;
      const formData = new FormData();
      formData.append('xlsfile', file); 
      formData.append('id',rowId)
      updateFileMutation(formData);
    };
    
    const handleFileUpload = async () => {
      if (!selectedFile) {
        alert('Please select a file');
        return;
      }
        const formData = new FormData();
        formData.append('xlsfile', selectedFile); // Append the selected file to a FormData object
          uploadFileMutation(formData);
        }

  
      const handleDelete = (id) => {
        deleteFileMutation({id})
      };
useEffect(()=>{
refetch()
},[deleteSuccess,updateSuccess])
  return (
    <>
    <div className='col-12 col-sm-12 col-xl'>
    <div className="card d-flex justify-content-center text-center p-15">
      <div className="justify-content-center p-5">
       {isSuccess&&!isLoading&&<h3 className="mb-5">File Uploaded Successfully!!</h3>} 
        <h1 className="">Upload your Excel File</h1>
        <p className="">File should be in .doc format</p>
      </div>
         
      <div className="d-flex flex-column align-items-center">
        <label htmlFor="fileInput" className="btn btn-primary btn-upload">
          <span>Drop your file here or Click to browse</span>
          <input
            type="file"
            id="fileInput"
            className="drop-zone__file-input visually-hidden"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
          />
        </label>
        {selectedFile && (
        
          <div className="mt-3">
            <h3 className="">Uploaded File</h3>
            <div className="d-flex align-items-center">
              <i className="bi bi-file-earmark-text mr-2"></i>
              <span className="">{selectedFile?.name}</span>
            </div>
          </div>
        )}
      </div>
      {selectedFile && <button  className="btn btn-success mt-7 d-flex flex-center" onClick={handleFileUpload}>
            {isLoading?<BarWave/>:
            <span>Upload File</span>
            
        }
          </button>
}
    </div>
  </div>

  {/* new */}
  <div className={`card card-xl-stretch mb-5 mt-10 mb-xl-8`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Uploaded Files</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Files</span>
        </h3>
       
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                {/* <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th> */}
                <th className='min-w-150px'>File Name</th>
                <th className='min-w-120px'>Updated At</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
  {data?.map(e=>
 <tr key={e.id}>
 {/* <td>
   <div className='form-check form-check-sm form-check-custom form-check-solid'>
     <input className='form-check-input widget-13-check' type='checkbox' value='1' />
   </div>
 </td> */}
 <td>
   <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
     {e.name}
   </a>
 </td>
 <td>
  
   <span className='text-muted fw-semibold text-muted d-block fs-7'>{e.updatedAt.split('T')[0]}</span>
 </td>

 <td className='text-end'>
  
 <label htmlFor="fileUpdate" className="mouse-pointer" >
      <span><KTIcon iconName='pencil' className='fs-3' /></span>
    <input
            type="file"
            id="fileUpdate"
            data-row-id={e.id}
            className="drop-zone__file-input visually-hidden"
            accept=".xlsx, .xls"
            onChange={handleFileUpdate}
          />
          </label>
     
   
   <span  onClick={() => handleDelete(e.id)} className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
     <KTIcon iconName='trash' className='fs-3' />
   </span>
 </td>
</tr>
)}
             
          </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>

  </>
  )
}

export {Upload}


// export {TablesWidget13}
