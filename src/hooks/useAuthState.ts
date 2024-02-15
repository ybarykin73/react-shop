import { useAppSelector } from "./hooks"

const useAuthState = () => {
  const {isLogged, user} = useAppSelector(store => store.Auth)

  return {
    isLogged: isLogged,
    id: user.uid,
    email: user.email
  }
}

export default useAuthState