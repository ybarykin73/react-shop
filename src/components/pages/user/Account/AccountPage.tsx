import AccountEdit from './AccountEdit/AccountEdit'
import AccountLogout from './AccountLogout/Accountlogout'

import './AccountPage.scss'

const AccountPage = () => {

  return (
    <div className='container'>
      <div className='account-page'>
        <div className='account-page__wrapper'>
          <h1 className='title title--main'>Account Page</h1>
          <AccountEdit />
          <AccountLogout />
        </div>
      </div>
    </div>
  )
}

export default AccountPage