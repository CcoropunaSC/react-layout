import classNames from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'

const DropdownStyled = styled.div`
    .dropdown-content {
        display: none;
        inline-size: 10rem;
        block-size: 12rem;
        background-color: var(--grey-2);
        position: absolute;
        inset-inline-end: 0;
        padding: .5rem;
        border-radius: .5rem;
        /* transform: .5s display; */
        transition: .9s display;
    }

    .dropdown-content.is-open {
        display: block;
    }
`

function Dropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleClickToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const handleBlurDropdown = () => {
        setDropdownOpen(false)
    }

    return (
        <DropdownStyled onBlur={handleBlurDropdown}>
            <button onClick={handleClickToggleDropdown}>Open</button>
            <div className={classNames({
                'dropdown-content': true,
                'is-open': dropdownOpen
            })} >

            </div>
        </DropdownStyled>
    )
}

export default Dropdown
