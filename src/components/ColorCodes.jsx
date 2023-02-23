import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import { CloseIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { getColorName } from '../apis/colorName'
import { colord } from 'colord'

const useStyles = makeStyles({
  root: {
    padding: '0 0 4px'
  }
})

function ColorCodes () {
  const classes = useStyles()

  const [codes, setCodes] = useState('')
  useEffect(() => {
    getColorName()
      .then(code => {
        setCodes(code)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <div>
        <table className='ctable'>
          <tbody className='ctable-body'>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>RGB</td>
              <td>
                <span className='ctable-code-value'>Test 1</span>
              </td>
            </tr>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>CMYK</td>
              <td>
                <span className='ctable-code-value'>Test 2</span>
              </td>
            </tr>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>HSL</td>
              <td>
                <span className='ctable-code-value'>Test 3</span>
              </td>
            </tr>
            <tr className='ctable-row'>
              <td className='ctable-code-type'>HSV</td>
              <td>
                <span className='ctable-code-value'>Test 4</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='clipboard-button-container'>
        <div className={classes.root}>
          <Button variant="outlined" color="primary" onClick={handleClick}>
          gimme that code
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            message='Copied!'
            action={
              <>
                <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                  <CloseIcon fontSize='small'/>
                </IconButton>
              </>
            }
          />
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
        <div className={classes.root}>
          <Button variant="outlined" color="primary">
          gimme that code
          </Button>
        </div>
      </div>
    </>
  )
}

export default ColorCodes
