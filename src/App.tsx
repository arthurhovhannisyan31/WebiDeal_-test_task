// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Switch, BrowserRouter } from 'react-router-dom'
// components
import Header from '_/components/Header'
import theme from '_/theme'
// helpers
import routes from '_/routes'

const useStyles = makeStyles(() => ({
  container: {},
}))

const App: React.FC = () => {
  const classes = useStyles()
  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <BrowserRouter>
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
  )
}

export default App
