// global imports
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

// local imports
import Header from '_/components/Header'
import Home from '_/components/Home'
import theme from '_/theme'

const useStyles = makeStyles(() => ({
  container: {},
}))

const CommonContext = React.createContext<any>({})

const App: React.FC = () => {
  const classes = useStyles()
  const [darkMode, setDarkMode] = React.useState(false)
  const memoContextValue = React.useMemo(
    () => ({
      test: '',
    }),
    []
  )

  return (
    <CommonContext.Provider value={memoContextValue}>
      <ThemeProvider theme={theme({ darkMode })}>
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid container>
            <Header theme={darkMode} setTheme={setDarkMode} />
            <Home />
          </Grid>
        </Grid>
      </ThemeProvider>
    </CommonContext.Provider>
  )
}

export default App
