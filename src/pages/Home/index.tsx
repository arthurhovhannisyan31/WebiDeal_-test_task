// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// components
import Greeting from '_/components/Greeting'
import SearchBar from '_/components/SearchBar'
// helpers
import useStyles from '_/pages/Home/style'
import { forksSelector } from '_/pages/Home/helpers'

const Forks: React.FC = () => {
  // useStyles
  const classes = useStyles()
  // useRouter
  const history = useHistory()
  // useState
  const [searchVal, setSearchVal] = React.useState('')
  // store
  const { error, loading } = useSelector(forksSelector)
  const handleSubmit = React.useCallback(
    (str: string) => {
      history.push(`/search?page=1&repository=${str}`)
    },
    [history]
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
          loading={loading}
          error={error?.message}
          value={searchVal}
          setValue={setSearchVal}
          onSubmit={handleSubmit}
        />
      </Grid>
    </Grid>
  )
}

export default Forks
