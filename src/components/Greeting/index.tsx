// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// helpers
import useStyles from '_/components/Greeting/style'

const Greeting: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container item justify="center">
      <Grid container item sm={6} direction="column" alignItems="center">
        <Typography variant="h3">Simple GitHub fork lookup!</Typography>
        <Typography variant="subtitle1">
          This is a simple service for github forks lookup.
        </Typography>
        <Typography variant="subtitle1">
          Please use following format for search{' '}
          <span className={classes.emphasize}>:owner/:repositoryName</span>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Greeting
