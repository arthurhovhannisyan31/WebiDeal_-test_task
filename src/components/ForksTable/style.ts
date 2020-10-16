// deps
import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(0),
  },
  table: {
    minWidth: 650,
  },
  link: {
    color: theme.palette.secondary.main,
  },
}))
