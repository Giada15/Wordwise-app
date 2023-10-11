import { useEffect } from "react"
import { useAuth } from "../contexts/FakeAuthContext"
import styles from "./User.module.css"
import { useNavigate } from "react-router-dom"

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// }

function User() {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  function handleClick() {
    logout()
    navigate("/")
  }

  return (
    <div className={styles.user}>
      <img src={user && user.avatar} alt={user && user.name} />
      <span>Welcome, {user && user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default User
