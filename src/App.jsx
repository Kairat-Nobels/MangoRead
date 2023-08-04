import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { theme } from './mainStyle/muiStyleTheme'
import AppRouter from './router/AppRouter'

import { store } from './store/store'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
