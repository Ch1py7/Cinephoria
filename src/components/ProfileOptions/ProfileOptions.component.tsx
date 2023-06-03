import { FC, ReactElement } from 'react'
import * as S from './ProfileOptions.styles'
import { Separator } from 'styles/Separator.styles'

interface ProfileOptionsProps {
  isProfileOpen: boolean
}

export const ProfileOptions: FC<ProfileOptionsProps> = ({ isProfileOpen }): ReactElement => {
  return (
    <S.ProfileOptions className={isProfileOpen ? 'showProfile' : 'noShowProfile'}>
      <S.PofileList>
        <li>
          <S.Link to='/profile'>My Stuff</S.Link>
        </li>
        <li>
          <S.Link to='/profie/select'>Switch Profiles</S.Link>
        </li>
        <li>
          <S.Link to='/settings'>Settings</S.Link>
        </li>
        <Separator />
        <li>
          <S.Link to='/signout'>Sign Out</S.Link>
        </li>
      </S.PofileList>
    </S.ProfileOptions>
  )
}
