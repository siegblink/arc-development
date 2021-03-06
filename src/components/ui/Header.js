import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles(function (theme) {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3rem'
    },
    logo: {
      height: '7em'
    }
  }
})

export default function Header() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <ToolBar disableGutters>
            <img src={logo} alt='company logo' className={classes.logo} />
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
