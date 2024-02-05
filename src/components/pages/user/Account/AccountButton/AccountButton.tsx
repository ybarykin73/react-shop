import { Link } from "react-router-dom"

import UserLogoutIcon from "../../../../subcomponents/icons/UserLogoutIcon"

import './AccountButton.scss'

const AccountButton = () => {
  return (
    <Link className="account-button" to={'./auth/registration'} >
      <UserLogoutIcon width={36} height={36}  />
    </Link>
  )
}

export default AccountButton