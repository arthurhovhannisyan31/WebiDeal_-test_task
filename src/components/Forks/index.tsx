// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import {useD} from 'react-redux'
// components
import Greeting from '_/components/Forks/components/Greeting'
import SearchBar from '_/components/Forks/components/SearchBar'
import ForksTable from '_/components/Forks/components/ForksTable'
// helpers
import useStyles from '_/components/Forks/components/style'

const Forks: React.FC = () => {
  // useStyles
  const classes = useStyles()
  // useState
  const [searchVal, setSearchVal] = React.useState('')

  const handleSubmit = React.useCallback((str: string) => {
    console.log(str)
  }, [])

  return (
    <Grid container justify="center">
      <Grid
        container
        sm={8}
        className={classes.container}
        direction="column"
        spacing={3}
      >
        <Greeting />
        <SearchBar
          value={searchVal}
          setValue={setSearchVal}
          onSubmit={handleSubmit}
        />
        <ForksTable />
      </Grid>
    </Grid>
  )
}

export default Forks
