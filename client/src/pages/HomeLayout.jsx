import { Outlet } from 'react-router-dom'
export default function HomeLayout() {
  return (
    <div>
      <nav>Nav</nav>
      <Outlet />
    </div>
  )
}
