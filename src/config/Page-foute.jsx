import Main from '../pages/Main'
import About from '../pages/About'
import Develop from '../pages/Develop'
import Product from '../pages/Product'
import Esg from '../pages/Esg'
import Carrer from '../pages/Carrer'

const navpass = [
    {
       path:'/',
       component:Main
     },
     {
       path:'/About',
       component:About
     },
    {
      path:'/Develop',
      component:Develop
    },
    {
     path:'/Product',
     component:Product
    },
    {
     path:'/Esg',
     component:Esg
    },
    {
     path:'/Carrer',
     component:Carrer
    }
  ];
  
  export default navpass;
