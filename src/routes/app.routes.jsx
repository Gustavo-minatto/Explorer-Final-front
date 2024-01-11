import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { OrderList } from '../pages/OrderList'
import { Payment } from '../pages/Payment'
import { AddPlate } from '../pages/AddPlate'
import { EditPlate } from '../pages/EditPlate'
import { OrderAdm } from '../pages/OrderAdm'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/orders' element={<OrderList/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/add' element={<AddPlate/>}/>
            <Route path='/edit/:id' element={<EditPlate/>}/>
            <Route path='/orderadm' element={<OrderAdm/>}/>
        </Routes>
    )
}