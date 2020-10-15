// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
// components
import Greeting from '_/components/Forks/components/Greeting'
import SearchBar from '_/components/Forks/components/SearchBar'
import ForksTable from '_/components/Forks/components/ForksTable'
// helpers
import useStyles from '_/components/Forks/components/style'

const Forks: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <Grid container sm={8} className={classes.container} direction="column">
        <Greeting />
      </Grid>
    </Grid>
  )
}

export default Forks
