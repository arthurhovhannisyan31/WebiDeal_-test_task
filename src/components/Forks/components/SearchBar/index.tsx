// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
// helpers
import useStyles from '_/components/Forks/components/SearchBar/style'

const SearchBar: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container item justify="center">
      <Grid container sm={4}>
        <FormControl className={classes.margin} variant="outlined" fullWidth>
          <InputLabel htmlFor="fork-search">Fork Search</InputLabel>
          <OutlinedInput
            id="fork-search"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SearchBar
