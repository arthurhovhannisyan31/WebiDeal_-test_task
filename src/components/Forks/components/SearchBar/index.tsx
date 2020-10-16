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

interface IProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (str: string) => void
}

const SearchBar: React.FC<IProps> = ({ value, setValue, onSubmit }) => {
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
  ])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  return (
    <Grid container item justify="center">
      <Grid container item sm={4}>
        <FormControl className={classes.margin} variant="outlined" fullWidth>
          <InputLabel htmlFor="fork-search">Fork Search</InputLabel>
          <OutlinedInput
            id="fork-search"
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleSubmit}>
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
