// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// helpers
import useStyles from '_/components/Forks/components/Greeting/style'

const Greeting: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Typography />
    </Grid>
  )
}

export default Greeting
