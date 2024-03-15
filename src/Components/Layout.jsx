import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

export default function Layout() {
    return (
        <>
            <Header />

            <div className="max-w-screen-xl flex flex-col flex-wrap  justify-between mx-auto ">

                <div>Layout</div>

                <Outlet />

            </div>
        </>


    )
}
import React from 'react'


