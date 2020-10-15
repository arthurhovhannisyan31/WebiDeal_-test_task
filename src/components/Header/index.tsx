// deps
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Switch from '@material-ui/core/Switch'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import { useHistory } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(() => ({
  container: {},
  link: {
    color: 'white',
  },
}))

interface IHeaderProps {
  theme: boolean
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IHeaderProps> = ({ theme, setTheme }) => {
  // useStyles
  const classes = useStyles()
  // useRouter
  const history = useHistory()

  const handleRedirect = React.useCallback(
    (route: string) => () => history.push(`${route}`),
    []
  )

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid
          container
          alignItems="center"
          justify="space-between"
          className={classes.container}
        >
          <Grid item>
            <IconButton onClick={handleRedirect('/')}>
              <HomeIcon />
            </IconButton>
          </Grid>
          <Switch
            checked={theme}
            onChange={() => setTheme((val: boolean) => !val)}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
