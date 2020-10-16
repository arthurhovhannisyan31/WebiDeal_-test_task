// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Rating from '@material-ui/lab/Rating'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TablePagination from '@material-ui/core/TablePagination'
// helpers
import useStyles from '_/components/ForksTable/style'
import { IFork } from '_/components/ForksTable/types'
import { rowSelector } from '_/components/ForksTable/helpers'

interface IProps {
  data: IFork[]
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  rowsPerPage: number
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
  totalCount: number
}

const ForksTable: React.FC<IProps> = ({
  data,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  totalCount,
}) => {
  console.log(page)

  console.log(totalCount)

  // useStyles
  const classes = useStyles()

  // useState

  const rows = React.useMemo(
    () =>
      data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(rowSelector),
    [data, page, rowsPerPage]
  )

  const handleChangePage = React.useCallback(
    (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage)
    },
    [setPage]
  )

  const handleChangeRowsPerPage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(1)
    },
    [setPage, setRowsPerPage]
  )

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  // todo change pagination to request params

  return (
    <Grid container item justify="center">
      <Grid container item sm={10}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Owner</TableCell>
                <TableCell align="left">Stars</TableCell>
                <TableCell align="left">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.owner}</TableCell>
                  <TableCell align="left">
                    <Rating name="read-only" value={row.stars} readOnly />
                  </TableCell>
                  <TableCell align="left">
                    <Link
                      className={classes.link}
                      href={row.link}
                      target="_blank"
                      rel="nofollow"
                    >
                      {row.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              {/* {emptyRows > 0 && ( */}
              {/*  <TableRow style={{ height: 53 * emptyRows }}> */}
              {/*    <TableCell colSpan={6} /> */}
              {/*  </TableRow> */}
              {/* )} */}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={totalCount}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default ForksTable
