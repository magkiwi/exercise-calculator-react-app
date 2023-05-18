import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { muiTheme } from 'shared/styles/muiTheme'

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
            hello
      </ThemeProvider>
  )
}

const App = () => {
  return (
      <Router>
          <QueryClientProvider client={queryClient}>
              <AppWithTheme/>
          </QueryClientProvider>
      </Router>
  )
}

export default App
