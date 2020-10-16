// deps
import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CircularProgress from '@material-ui/core/CircularProgress'
// helpers
import useStyles from '_/components/SearchBar/style'

interface IProps {
  value: string
  page?: number
  setValue: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (str: string) => void
  error: string
  loading: boolean
}

const SearchBar: React.FC<IProps> = ({
  value,
  setValue,
  onSubmit,
  page = 1,
  error,
  loading,
}) => {
  const classes = useStyles()

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [setValue]
  )

  const handleSubmit = React.useCallback(() => onSubmit(value), [
    onSubmit,
    value,
    page,
  ])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  // todo field validation

  return (
    <Grid container item justify="center">
      <Grid container item sm={4} className={classes.searchFieldContainer}>
        <TextField
          id="fork-search"
          label="Fork Search"
          variant="outlined"
          fullWidth
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          error={!!error}
          helperText={error && 'Please check owner or repositoryName'}
        />
        <Grid item className={classes.floating}>
          {loading ? (
            <IconButton>
              <CircularProgress size={20} />
            </IconButton>
          ) : (
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SearchBar
