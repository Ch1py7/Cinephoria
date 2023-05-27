import { FC, ReactElement } from 'react'
import * as S from './NavComponent.styles'
import { Icon } from '@iconify/react'

export const NavComponent: FC = (): ReactElement => {

  const IconStyles = {
    fontSize: '2.4rem',
    color: '#e4e0e6'
  }

  return (
    <S.NavComponent>
      <S.NavSections>
        <S.NavAnchor href='#'>
          <Icon icon='iconamoon:menu-burger-horizontal' style={IconStyles} />
        </S.NavAnchor>
        <S.NavAnchor href='#'>Movies</S.NavAnchor>
        <S.NavAnchor href='#'>Series</S.NavAnchor>
      </S.NavSections>
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
