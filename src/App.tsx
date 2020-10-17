// deps
import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
// components
import Header from '_/components/Header'
import theme from '_/theme'
// helpers
import interceptor from '_/utils/interceptor.service'
import routes from '_/routes'
import store from '_/store'

const useStyles = makeStyles(() => ({
  container: {},
}))

interceptor()

const App: React.FC = () => {
  const classes = useStyles()
  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={theme({ darkMode })}>
          <CssBaseline />
          <Grid container className={classes.container}>
            <Grid container direction="column">
              <Header theme={darkMode} setTheme={setDarkMode} />
              <React.Suspense fallback={<CircularProgress />}>
                <Switch>{routes}</Switch>
              </React.Suspense>
            </Grid>
          </Grid>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
