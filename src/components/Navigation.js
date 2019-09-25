import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled className="Navigation">
      <LinkStyled exact to="/">
        Home
      </LinkStyled>
      <LinkStyled to="/Practice">Practice</LinkStyled>
      <LinkStyled to="/Bookmark">Bookmark</LinkStyled>
      <LinkStyled to="/Settings">Settings</LinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
`

const LinkStyled = styled(NavLink)`
  font-size: 1.2em;
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;

  &.active {
    background: rgb(212, 55, 84);
  }
`
