import { Icon } from '@iconify/react'
import { BurgerOptions } from 'components/BurgerOptions'
import { ProfileOptions } from 'components/ProfileOptions'
import { FC, ReactElement, useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './NavComponent.styles'

export const NavComponent: FC = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

  const onClickBurger = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const onClickProfile = () => {
    setIsProfileOpen((prev) => !prev)
  }

  const IconStyles = {
    fontSize: '2.4rem',
    color: '#e4e0e6',
    cursor: 'pointer',
  }

  return (
    <S.NavComponent>
      <BurgerOptions isMenuOpen={isMenuOpen} onClickBurger={onClickBurger} />
      <S.Burger>
        <Icon
          icon='iconamoon:menu-burger-horizontal'
          style={IconStyles}
          onClick={onClickBurger}
        />
        <S.NavLink to='/'>Movies</S.NavLink>
        <S.NavLink to='/series'>Series</S.NavLink>
      </S.Burger>
      <S.NavLink style={{ display: 'block' }} to='/'>
        <S.LogoImage
          src='/logo.png'
          aria-label='Go to home page'
          draggable={false}
          alt='logo'
        />
      </S.NavLink>
      <S.NavSections>
        <NavLink
          to='/search'
          aria-label='Go to search page'
          style={{ display: 'block' }}
        >
          <Icon icon='ph:magnifying-glass-bold' style={IconStyles} />
        </NavLink>
        <S.ProfileOptions onClick={onClickProfile}>
          <ProfileOptions isProfileOpen={isProfileOpen} />
          <S.LetterBorder>
            <S.Letter>B</S.Letter>
          </S.LetterBorder>
          <S.ProfileName>Bulbsum</S.ProfileName>
        </S.ProfileOptions>
      </S.NavSections>
    </S.NavComponent>
  )
}
