import { createMuiTheme } from '@material-ui/core/styles'
// import green from "@material-ui/core/colors/green";
// import purple from "@material-ui/core/colors/purple";

const theme = (props: any) =>
  createMuiTheme({
    palette: {
      type: props.darkMode ? 'dark' : 'light',
    },
  })

export default theme
