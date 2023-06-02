import { FC, ReactElement, useState } from 'react'
import * as S from './NavComponent.styles'
import { Icon } from '@iconify/react'
import { BurgerOptions } from 'components/BurgerOptions'

export const NavComponent: FC = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const onClickBurger = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const IconStyles = {
    fontSize: '2.4rem',
    color: '#e4e0e6',
    cursor: 'pointer'
  }

  return (
    <S.NavComponent>
      <BurgerOptions isMenuOpen={isMenuOpen} onClickBurger={onClickBurger}/>
      <S.Burger>
        <Icon
          icon='iconamoon:menu-burger-horizontal'
          style={IconStyles}
          onClick={onClickBurger}
        />
        <S.NavAnchor href='/'>Movies</S.NavAnchor>
      </S.Burger>
      <S.LogoImage src='/logo.png' draggable={false}/>
      <S.NavSections>
        <S.NavAnchor href='#'>
          <Icon icon='ph:magnifying-glass-bold' style={IconStyles} />
        </S.NavAnchor>
        <S.LetterBorder>
          <S.Letter>B</S.Letter>
        </S.LetterBorder>
        <S.NavAnchor href='#'>Bulbsum</S.NavAnchor>
      </S.NavSections>
    </S.NavComponent>
  )
}
