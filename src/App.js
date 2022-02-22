import React from 'react';
import Nav from './Componants/Nav';
import Footer from './Componants/Footer';
import Home from './Componants/Home';
import Search from './Componants/Search';
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';

const App = ()=>{

    return(
        <div>
        
           <Nav/>
           <Home/>
           <Footer/>
        </div>
    );
}

export default App;
