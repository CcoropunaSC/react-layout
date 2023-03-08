import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'

const HeaderStyled = styled.div`
    grid-area: header;
    background-color: var(--grey-1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .start-section {
        block-size: 4rem;
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 640px) {
        .open-menu-mobile {
            display: none;
        }
    }


`

function Header({setMobileMenu}) {
    const handleClick = () => {
        setMobileMenu(true)
        console.log('entre');
    }

    return (
        <HeaderStyled>
            <div className='start-section'>
                <button onClick={handleClick} className='open-menu-mobile'>x</button>
                <h3>Header</h3>
            </div>
            <div className="end-section">
                <Dropdown/>
            </div>
        </HeaderStyled>
    )
}

export default Header
