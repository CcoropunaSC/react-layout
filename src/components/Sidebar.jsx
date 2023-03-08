import React, { useState } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { Menu, Star } from './icons'

const SidebarStyled = styled.div`
    display: none;

    @media screen and (min-width: 640px) {
        display: block;
        grid-area: sidebar;
        background-color: var(--grey-1);
    }

    .top {
        display: flex;
        align-items: center;
        /* background-color: indigo; */
        padding: .5rem;
    }

    img {
        block-size: 1.5rem;
        inline-size: 1.5rem;
    }

    .company {
        font: var(--subtitle1);
        padding-inline: .5rem;
        padding-block: .75rem;
        margin: 0;
    }

    .toggle-menu {
        border: none;
        background-color: transparent;
        block-size: 3rem;
        inline-size: 3rem;
        cursor: pointer;
    }

    .menu {
        padding: 0;
        margin: 0;
    }

    .menu-item {
        list-style: none;
        font: var(--subtitle1);
        block-size: 3rem;
        inline-size: 15rem;
        display: flex;
        align-items: center;
        /* padding-inline-start: 1.25rem; */
        border-start-end-radius: .5rem;
        border-end-end-radius: .5rem;
        cursor: pointer;
        user-select: none;
    }
    
    .menu-item:hover {
        background-color: var(--white)
    }
    .menu-item.is-active {
        color: var(--primary);
        background-color: var(--blue-bg);
    }

    .menu-item .item-icon {
        block-size: 1.5rem;
        inline-size: 1.5rem;
        padding: .75rem;
        margin-inline-start: .5rem;
    }

    .menu-item .item-desc {
        padding-inline: .5rem;
        padding-block: .75rem;
    }

    .menu-title {
        font: var(--overline);
        margin: 0;
        padding-block: 1rem;
        padding-inline: .75rem;
        margin-inline-start: .5rem;
    }

    .is-simple-menu {
        display: none;
    }

`

function Sidebar({ simpleMenu, setSimpleMenu }) {

    const handleClickToggleMenu = () => {
        setSimpleMenu(!simpleMenu);
    }

    return (
        <SidebarStyled>
            <div className="top">
                <button
                    onClick={handleClickToggleMenu}
                    className='toggle-menu'>
                    <Menu />
                </button>
                <img
                    className={classNames({ 'is-simple-menu': simpleMenu })}
                    src="../src/assets/images/logo.png"
                    alt="Logo"
                />
                <p
                    className={classNames({
                        'company': true,
                        'is-simple-menu': simpleMenu
                    })}
                >
                    Inspiration TI
                </p>
            </div>
            <ul className='menu'>
                <li className="menu-item is-active">
                    <div className="item-icon">
                        <Star />
                    </div>
                    <span
                        className={classNames({
                            'item-desc': true,
                            'is-simple-menu': simpleMenu
                        })}
                    >
                        Recibidos
                    </span>
                </li>
                <li className="menu-item">
                    <div className="item-icon">
                        <Star />
                    </div>
                    <span
                        className={classNames({
                            'item-desc': true,
                            'is-simple-menu': simpleMenu
                        })}
                    >
                        Destacados
                    </span>
                </li>
            </ul>
            <p
                className={classNames({
                    'menu-title': true,
                    'is-simple-menu': simpleMenu
                })}
            >
                CATEGORÌAS
            </p>
            <ul className='menu'>
                <li className="menu-item">
                    <div className="item-icon">
                        <Star />
                    </div>
                    <span
                        className={classNames({
                            'item-desc': true,
                            'is-simple-menu': simpleMenu
                        })}
                    >
                        Recibidos
                    </span>
                </li>
                <li className="menu-item">
                    <div className="item-icon">
                        <Star />
                    </div>
                    <span
                        className={classNames({
                            'item-desc': true,
                            'is-simple-menu': simpleMenu
                        })}
                    >
                        Destacados
                    </span>
                </li>
            </ul>
        </SidebarStyled>
    )
}

export default Sidebar
