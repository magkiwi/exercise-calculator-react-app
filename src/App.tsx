import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { muiTheme } from 'shared/styles/muiTheme'
import { Root } from 'views/Root'
import { ExercisesContextProvider } from './contexts/ExercisesContext/ExercisesContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 360000 // 6 minutes
    }
  }
})

const AppWithTheme = () => {
  const theme = muiTheme()

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
            <Root />
      </ThemeProvider>
  )
}

const App = () => {
  return (
      <Router>
          <QueryClientProvider client={queryClient}>
              <ExercisesContextProvider>
                  <AppWithTheme/>
              </ExercisesContextProvider>
          </QueryClientProvider>
      </Router>
  )
}

export default App
