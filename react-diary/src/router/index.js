import { createBrowserRouter } from 'react-router-dom'
import LayoutPage from '../pages/Layout'
import Login from '../pages/Login'
import DailyReport from '../pages/DailyReport'
import New from '../pages/New'
import Website from '../pages/Website'
const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage />,
        children: [
            {
                index: true,
                element: <DailyReport />
            },
            {
                path: 'new',
                element: <New />
            },
            {
                path: 'website',
                element: <Website />
            },
        ]    
    },
    {
        path: '/login',
        element: <Login />
    }
])
export default router