import NavBar from "../NavBar";
import HeaderRight from "../HeaderRight/HeaderRight";

const Header = (props) => {
  return (
    <>
      <HeaderRight user={props.user} handleLogout={props.handleLogout} />
      <NavBar user={props.user} handleLogout={props.handleLogout} />
    </>
  )
}

export default Header