import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'
import {Horizontal} from './components/Horizontal'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'AI',
    path: '/ai/career-guide',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const WizardsPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='career-guide'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Career Guide</PageTitle>
            <Horizontal />
          </>
        }
      />
      <Route
        path='cover-letter'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Cover Letter</PageTitle>
            <Vertical />
          </>
        }
      />
      <Route index element={<Navigate to='/ai/cover-letter' />} />
    </Route>
  </Routes>
)

export default WizardsPage
