import useTheme from './hooks/useTheme'

function App() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        <h1 className="text-3xl font-bold p-4">
          myMentalDev
        </h1>
        <button 
          onClick={toggleTheme}
          className="mx-4 px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Toggle theme
        </button>
      </div>
    </div>
  )
}

export default App
