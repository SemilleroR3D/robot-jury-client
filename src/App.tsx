import Layout from './layouts/Layout'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPages'
import HomePage from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthContext from './AuthContex'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import UserPage from './pages/UserPages'
import RolesPage from './pages/RolesPages'
import TeamsPage from './pages/TeamsPage'
import CompetenciesPage from './pages/CompetenciesPage'
import JurymanPage from './pages/JurymanPage'
import PositionsPage from './pages/CrudPositionsPage'
import JuriesPage from './pages/JuriesPage'
import CalificationPage from './pages/CalificationPage'
import BoardPage from './pages/BoardPage'

const homeRoutes = [
  {
    path: '/juries',
    element: <JurymanPage />
  },
  {
    path: '/juries/:id',
    element: <CalificationPage />
  },
  {
    path: '/board/:id',
    element: <BoardPage />
  },
  {

    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  }
]

const dashboardRoutes = [
  {
    path: '/dashboard',
    element: (
      <AuthContext>
        <DashboardLayout />
      </AuthContext>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/dashboard/users',
        element: <UserPage />
      },
      {
        path: '/dashboard/rol',
        element: <RolesPage />
      },
      {
        path: '/dashboard/teams',
        element: <TeamsPage />
      },
      {
        path: '/dashboard/competencies',
        element: <CompetenciesPage />
      },
      {
        path: '/dashboard/competencies/:id',
        element: <PositionsPage />
      },
      {
        path: '/dashboard/juries',
        element: <JuriesPage />
      },
      {
        path: '/dashboard/juries/:id',
        element: <CalificationPage />
      }
    ]
  }
]

const combinedRoutes = [...homeRoutes, ...dashboardRoutes]

const router = createBrowserRouter(combinedRoutes)

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
