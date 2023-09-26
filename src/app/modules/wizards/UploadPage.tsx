import {Route, Routes, Outlet, Navigate, useNavigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { Card4 } from '../../../_metronic/partials/content/cards/Card4'
import { Upload } from './components/upload'
import { useAuth } from '../auth'


const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Files',
    path: '/admin/file-upload',
    isSeparator: false,
    isActive: false,
  },

]

const FileUpload = () => {
// const navigate = useNavigate();
const {currentUser} = useAuth()
// if (currentUser?.role !== 'admin') {
//   navigate('/dashboard');
// }
return (
  <Routes>
   
    {currentUser?.role === 'admin' ? (
      <>
        <Route element={<Outlet />}>

<Route
    path='file-upload'
    element={
      <>
        <PageTitle breadcrumbs={wizardsBreadCrumbs}>Upload file</PageTitle>
         <Upload/>
      </>
    }
  />
 
</Route>
      </>
    ) : (
      <>
    
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </>
    )}
  </Routes>
    
)

      }

export default FileUpload
