import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import SingUp from './pages/singUp'
import Dashboard from './pages/dashboard'
import ListaPage from './pages/listaPage'
import MinhaLista from './pages/minhaLista/index';



export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/singUp' element={<SingUp />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/minhasListas' element={<MinhaLista />} />
                <Route path='/lista/:idParam' element={<ListaPage />} />

            </Routes>
        </BrowserRouter>
    )
}

