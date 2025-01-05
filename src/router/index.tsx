import Dashboard from '@pages/Dashboard/Dashboard';
import { LandingPage } from '@pages/Landing/Landing';
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';

export const router = createBrowserRouter( createRoutesFromElements (
    <Route path='/'>
       <Route path='/' element={<LandingPage />} />
       <Route path='/dashboard' element={<Dashboard />} />
    </Route>
));