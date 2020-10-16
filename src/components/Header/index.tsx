// deps
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import ViewListIcon from '@material-ui/icons/ViewList'
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
    [history]
  )

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Grid
          container
          alignItems="center"
          justify="space-between"
          className={classes.container}
        >
          <Grid item>
            <Grid container>
              <Grid item>
                <Tooltip title="Home">
                  <IconButton onClick={handleRedirect('/')}>
                    <HomeIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Search">
                  <IconButton onClick={handleRedirect('/search')}>
                    <ViewListIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
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
