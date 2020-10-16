// deps
import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  floating: {
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
  },
  searchFieldContainer: {
    position: 'relative',
  },
}))
