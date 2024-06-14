import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}
