import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import classNames from 'classnames'
import MobileSidebar from '../components/MobileSidebar'

const LayoutStyled = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    grid-template-areas: "header" "main";
    block-size: 100vh;

    @media screen and (min-width: 640px) {
    grid-template-columns: 15.5rem 1fr;
    grid-template-areas: "sidebar header" "sidebar main";
    transition: .5s grid-template-columns;

    &.is-simple-menu {
        grid-template-columns: 4rem 1fr;
    }
    }

    .main {
        background-color: var(--primary);
        grid-area: main;
    }
`

function Layout() {
    const [simpleMenu, setSimpleMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    console.log(mobileMenu);

    return (
        <LayoutStyled className={classNames({ 'is-simple-menu': simpleMenu })}>
            <MobileSidebar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            <Sidebar simpleMenu={simpleMenu} setSimpleMenu={setSimpleMenu} />
            <Header setMobileMenu={setMobileMenu} />
            <main className='main'>
                <h3>Content</h3>
            </main>
        </LayoutStyled>
    )
}

export default Layout
