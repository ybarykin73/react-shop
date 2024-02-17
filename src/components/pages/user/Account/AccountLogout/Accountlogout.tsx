import { useNavigate } from "react-router-dom"

import Button from "../../../../subcomponents/button/Button"

import { auth } from "../../../../../firebase"
import { useAppDispatch } from "../../../../../hooks/hooks"
import { authLogoutUser } from "../../../../../store/slice/UserSlice"

const AccountLogout = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const logout = () => {
    dispatch(authLogoutUser())
    auth.signOut()
    navigate('/')
  }

  return (
    <div>
      <Button
        style="primary"
        onClick={logout}
        ariaLabel="Выйти из аккаунта"
      >
        Выйти из аккаунта
      </Button>
    </div>
  )
}

export default AccountLogout