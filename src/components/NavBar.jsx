import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

//en rutas con react router dom no se usa etqueta ancor a pq nos genera automaticamente un actualizacion de pag q no queremos  por eso importamos de react router dom NavLink cambio etiqueta a x navLink y borro los href y los reeemplazo x prop to={}
//en el navbar no van los detalles pq detalles es una pag q se va a abrir cdo demos clic en alguna peli o serie para poder ver el detalle del prod

export const NavBar = () => {
  return (
    <div className="container">
        <nav className='nav'>
            <div className='nav__brand'>
                <NavLink className='nav__link' to='/'>mi marca</NavLink>
            </div>
            <ul className='nav__list'>
                <li>
                    <NavLink className='nav__link' to='/categoria/films'>peliculas</NavLink>
                </li>
                <li>
                    <NavLink className='nav__link' to='/categoria/series'>series</NavLink>
                </li>
                <li>
                    <NavLink className='nav__link' to='cart'>
                    <CartWidget />
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar