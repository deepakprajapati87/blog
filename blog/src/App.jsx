import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import AppLayout from './components/Applayout/Applayout';
import { BlogSideBar } from './pages/Blogsidebar';
import { BlogSingle } from './pages/BlogSingle';



const App=()=>{


  const router = createBrowserRouter([

    {
      path:"/",
     element:<AppLayout/>,

     children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
  
      {
        path:"/services",
        element:<Services/>,
      },
  
      {
        path:"/portfolio",
        element:<Portfolio/>,
      },
      {
        path:"/blog",
        element:<Blog/>,
      },
      {
        path:"/BlogWithSidebar",
        element:<BlogSideBar/>,
      },
      {
        path:"/BlogSingle",
        element:<BlogSingle/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      }
     ]
    },
  

  ])

  return(
      <>
    
      <RouterProvider router={router}/>
   
      </>
  )
}
export default App;