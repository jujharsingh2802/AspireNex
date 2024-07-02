import { useEffect, useState } from 'react'
import { ThemeModeProvider } from './context/Theme.jsx'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const [themeMode, setThemeMode] = useState("dark")

  const darkTheme = () => {
    setThemeMode("dark")
  }
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch(logout())
        setLoading(true)
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading ? (
    <ThemeModeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-[#1C1A1A]">
        <Header />
        <main className="flex-grow max-w-full overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeModeProvider>
  ) : (
    <Loading />
  )
}

export default App
