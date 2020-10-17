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
import {
  forksSelector,
  isPageExist,
  pageNormalize,
} from '_/pages/Search/helpers'
import useStyles from '_/pages/Search/style'

const Forks: React.FC = () => {
  // useStyles
  const classes = useStyles()
  // useRouter
  const history = useHistory()
  const location = useLocation()
  const { page: pageValue, repository: url = '' } = queryString.parse(
    location.search
  )
  const repository = (url as never) as string
  const pageNumber = +(pageValue as never) as number
  const normalizedPageNumber = pageNormalize(pageNumber)

  // useState
  const [searchVal, setSearchVal] = React.useState<string>(repository)
  const [page, setPage] = React.useState<number>(normalizedPageNumber)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  // store
  const dispatch: AppDispatch = useDispatch()
  const { error, loading, data, totalCount } = useSelector(forksSelector)
  const tableData = data.get(`${repository}-${rowsPerPage}-${page}`) || []
  const totalCountData = totalCount.get(repository)

  const handleSubmit = React.useCallback(
    (str: string) => {
      history.push(`/search?page=${1}&repository=${str}`)
      setPage(1)
    },
    [history]
  )

  // todo review
  React.useEffect(() => {
    if (!totalCountData && repository) {
      dispatch(getForksCountAction(repository))
    }
    // eslint-disable-next-line
  }, [repository])

  React.useEffect(() => {
    if (page && repository) {
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
    if (normalizedPageNumber) {
      setPage(normalizedPageNumber)
    }
  }, [normalizedPageNumber])

  React.useEffect(() => {
    if (!isPageExist(totalCount, page, rowsPerPage) && page !== 1) {
      history.push(`/search?page=${1}&repository=${repository}`)
      // todo show warning dialog
    }
  }, [history, totalCount, page, rowsPerPage, repository])

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
        <SearchBar
          loading={loading}
          error={error?.message}
          value={searchVal}
          page={page}
          setValue={setSearchVal}
          onSubmit={handleSubmit}
        />
        {(pageNumber <= 0 || !repository || error) && (
          <Typography className={classes.error}>
            Please check your url, make sure page and repository params are
            present and correct
          </Typography>
        )}
        <ForksTable
          data={tableData}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalCount={totalCountData}
        />
      </Grid>
    </Grid>
  )
}

export default Forks
