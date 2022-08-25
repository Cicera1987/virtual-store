
import React,{useContext} from 'react';
import PrivateRoutes from './components/routes/private.routes';
import PublicRoutes from './components/routes/public.routes';
import {AuthContext} from './components/context/AuthContext'


function App() {
  const {auth} = useContext(AuthContext)

  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}

export default App;



