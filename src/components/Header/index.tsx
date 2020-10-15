import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Switch from '@material-ui/core/Switch'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles(() => ({
  container: {},
  link: {
    color: 'white',
  },
}))

interface IHeaderProps {
  theme: boolean
  setTheme: any
}

const Header: React.FC<IHeaderProps> = ({ theme, setTheme }) => {
  const classes = useStyles()
  return (
    <AppBar position={'static'}>
      <Toolbar variant={'dense'}>
        <Grid container justify={'space-between'} className={classes.container}>
          <Grid item>
            <HomeIcon />
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
