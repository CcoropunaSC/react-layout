import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

const MobileSidebarStyled = styled.div`
    display: none;
    position: absolute;
    background-color: var(--grey-1);
    block-size: 100vh;
    inline-size: 10rem;

    &.is-open {
        display: block;

        @media screen and (min-width: 640px) {
            display: none;
        }
    }
`

function MobileSidebar({ mobileMenu, setMobileMenu }) {
    const handleClick = () => {
        setMobileMenu(false)
    }

    return (
        <MobileSidebarStyled className={classNames({
            'is-open': mobileMenu
        })}>
            <div className="top">
                <h3>Navegation</h3>
                <button onClick={handleClick} >Close</button>
            </div>
            <ul>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
            </ul>
        </MobileSidebarStyled>
    )
}

export default MobileSidebar
