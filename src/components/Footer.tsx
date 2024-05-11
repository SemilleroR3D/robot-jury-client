import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Footer () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        backgroundColor: '#333',
        color: '#fff',
        borderTop: '1px solid #555',
        marginTop: '50px'
      }}
    >
      <Typography variant='body2' color='common.white' align='center'>
        {'Desarrollado por '}
        <Link color='inherit' target='_blank' href='https://github.com/ToquiNovic' rel='noreferrer'>
          Daniel Toquica -
        </Link>{' '}
        <Link color='inherit' target='_blank' href='https://github.com/Dairo01001' rel='noreferrer'>
          Dairo Garcia -
        </Link>{' '}
        <Link color='inherit' target='_blank' href='https://github.com/JanerBolivar' rel='noreferrer'>
          Janer Bolivar
        </Link>{' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </Box>
  )
}

export default Footer
