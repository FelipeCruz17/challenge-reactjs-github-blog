import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img alt="" src={logo} />
    </HeaderContainer>
  )
}
