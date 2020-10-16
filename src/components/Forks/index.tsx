// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useDispatch } from 'react-redux'
// components
import Greeting from '_/components/Forks/components/Greeting'
import SearchBar from '_/components/Forks/components/SearchBar'
import ForksTable from '_/components/Forks/components/ForksTable'
// helpers
import useStyles from '_/components/Forks/components/style'
import { getForksAction } from '_/store/forks/actions'
import { AppDispatch } from '_/store/store'

const Forks: React.FC = () => {
  // useStyles
  const classes = useStyles()
  // useState
  const [searchVal, setSearchVal] = React.useState('')
  // useDispatch
  const dispatch: AppDispatch = useDispatch()
  //
  const handleSubmit = React.useCallback(
    (str: string) => {
      dispatch(getForksAction(str))
    },
    [dispatch]
  )

  return (
    <Grid container justify="center">
      <Grid
        container
        item
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
