// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import queryString from 'query-string'
// components
import SearchBar from '_/components/SearchBar'
import ForksTable from '_/components/ForksTable'
// helpers
import { getForksCountAction, getForksPageAction } from '_/store/forks/actions'
import { AppDispatch } from '_/store/store'
import { forksSelector } from '_/pages/Search/helpers'
import useStyles from '_/pages/Search/style'

const Forks: React.FC = () => {
  // useStyles
  const classes = useStyles()
  // useRouter
  const history = useHistory()
  const location = useLocation()
  const { page: pageValue = 0, repository = '' } = queryString.parse(
    location.search
  )

  // useState
  const [searchVal, setSearchVal] = React.useState<string>(
    (repository as never) as string
  )
  const [page, setPage] = React.useState<number>(
    +(pageValue as never) as number
  )
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  // store
  const dispatch: AppDispatch = useDispatch()
  const { error, loading, data, totalCount } = useSelector(forksSelector)
  const tableData = data.get(`${repository}-${rowsPerPage}-${page}`) || []
  const handleSubmit = React.useCallback(
    (str: string, pageNum: number) => {
      history.push(`/search?page=${pageNum}&repository=${str}`)
      setPage(0)
    },
    [history]
  )

  React.useEffect(() => {
    if (!totalCount && repository) {
      dispatch(getForksCountAction(repository as string))
    }
    // eslint-disable-next-line
  }, [repository])

  React.useEffect(() => {
    if (!Number.isNaN(page) && repository) {
      dispatch(
        getForksPageAction({
          page,
          per_page: rowsPerPage,
          url: repository as string,
        })
      )
    }
    // eslint-disable-next-line
  }, [dispatch, repository, page, rowsPerPage])

  React.useEffect(() => {
    if (!Number.isNaN(pageValue)) {
      setPage(+(pageValue as never) as number)
    }
  }, [pageValue])

  return (
    <Grid container justify="center">
      <Grid
        container
        item
        sm={8}
        className={classes.container}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Typography variant="subtitle1">
          Please use following format for search{' '}
          <span className={classes.emphasize}>:owner/:repositoryName</span>
        </Typography>
        <span>page: {page}</span>
        <SearchBar
          loading={loading}
          error={error?.message}
          value={searchVal}
          page={page}
          setValue={setSearchVal}
          onSubmit={handleSubmit}
        />
        {(Number.isNaN(page) || !repository || error) && (
          <Typography className={classes.error}>
            Please check your url, make sure page and repository params are
            present
          </Typography>
        )}
        <ForksTable
          data={tableData}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalCount={totalCount}
        />
      </Grid>
    </Grid>
  )
}

export default Forks
