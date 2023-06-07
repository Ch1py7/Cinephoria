import { FC, ReactElement } from 'react'
import * as S from './BurgerOptions.styles'
import { Separator } from 'styles/Separator.styles'

interface BurgerOptionsProps {
  isMenuOpen: boolean
  onClickBurger: () => void
}

export const BurgerOptions: FC<BurgerOptionsProps> = ({ isMenuOpen, onClickBurger}): ReactElement => {
  return (
    <>
      <S.BurgerOptions className={isMenuOpen ? 'showMenu' : 'noShowMenu'}>
        <S.Blur onClick={onClickBurger} isOpen={isMenuOpen ? 'block' : 'none'}/>
        <S.Icon onClick={onClickBurger} icon='radix-icons:cross-2' />
        <ol style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <li>
            <S.Link onClick={onClickBurger} to='/'>Home</S.Link>
          </li>
          <li>
            <S.Link onClick={onClickBurger} to='/series'>Series</S.Link>
          </li>
          <li>
            <S.Link onClick={onClickBurger} to='/'>Movies</S.Link>
          </li>
          <li>
            <S.Link onClick={onClickBurger} to='/search'>Search</S.Link>
          </li>
          <li>
            <S.Link onClick={onClickBurger} to='/trending'>Trending Now</S.Link>
          </li>
          <Separator style={{marginTop: '2rem'}} size='small'/>
        </ol>
        <S.Socials>
          <a href='https://twitter.com/Bulbsum' target='_BLANK' rel='noreferrer'>
            <S.Icon icon='akar-icons:twitter-fill' style={{fontSize: '4rem'}}/>
          </a>
          <a href='https://github.com/Ch1py7' target='_BLANK' rel='noreferrer'>
            <S.Icon icon='akar-icons:github-fill' style={{fontSize: '4rem'}}/>
          </a>
        </S.Socials>
      </S.BurgerOptions>
    </>
  )
}
