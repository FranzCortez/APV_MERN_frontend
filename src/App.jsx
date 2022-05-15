import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './paginas/Login';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import Registrar from './paginas/Registrar';
import NuevoPassword from './paginas/NuevoPassword';
import AdministrarPacientes from './paginas/AdministrarPacientes';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacienteProvider } from './context/PacienteProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <PacienteProvider>
            <Routes>
                <Route path='/' element={<AuthLayout/>}>
                    <Route index element={<Login />}/>
                    <Route path='registrar' element={<Registrar />}/>
                    <Route path='olvide-password' element={<OlvidePassword />}/>
                    <Route path='olvide-password/:token' element={<NuevoPassword />}/>
                    <Route path='confirmar/:id' element={<ConfirmarCuenta />}/>
                </Route>

                <Route path='/admin' element={<RutaProtegida />}>
                    <Route index element={<AdministrarPacientes />}></Route>
                    <Route path='perfil' element={<EditarPerfil />}></Route>
                    <Route path='cambiar-password' element={<CambiarPassword />}></Route>
                </Route>

            </Routes>
          </PacienteProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
