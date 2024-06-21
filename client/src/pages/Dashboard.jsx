import { Outlet } from 'react-router-dom'
import SmallSidebar from '../components/SmallSidebar'
import BigSidebar from '../components/BigSidebar'
import NavBar from '../components/NavBar'
import Wrapper from '../assets/wrappers/Dashboard'
import { useState, createContext, useContext } from 'react'
import { checkDefaultTheme } from '../App'

const DashboardContext = createContext()

export default function Dashboard() {
  //temp
  const user = { name: 'Steve' }
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme())

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  async function logoutUser() {
    console.log('log out user')
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext)
