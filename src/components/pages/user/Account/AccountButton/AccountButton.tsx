import { Link } from "react-router-dom"

import useAuthState from "../../../../../hooks/useAuthState"

import UserLoginIcon from "../../../../subcomponents/icons/UserLoginIcon"
import UserLoggedOutIcon from "../../../../subcomponents/icons/UserLoggedOutIcon"

import './AccountButton.scss'

const AccountButton = () => {
  const {isLogged} = useAuthState()

  return (
    <>
      {
        isLogged
        ? 
        <Link className="account-button" to={'./auth/account'} >
          <UserLoginIcon width={36} height={36}  />
        </Link>
        :
        <Link className="account-button" to={'./auth/registration'} >
          <UserLoggedOutIcon width={36} height={36}  />
        </Link>
      }
    </>
  )
}

export default AccountButton

