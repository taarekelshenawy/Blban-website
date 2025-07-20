import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Layout/>,
     
      children:[
        {path:'',element:<HomePage/>},
        {path:'About',element:<About/>},
        {path:'Contact',element:<Contact/>},
        {path:'Menu',element:<Menu/>}
      ]
    }
  ])


  return (
    <>
   
    <RouterProvider router={router}>

    </RouterProvider>
 
     
    </>
  )
}

export default App
