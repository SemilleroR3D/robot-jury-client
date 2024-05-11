import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { registerUser } from '../services/User.ts'
import { RegisterData } from '../types/RegisterData'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { MenuItem } from '@mui/material'

export default function SignUp () {
  const [selectedSex, setSelectedSex] = useState('')
  const navigate = useNavigate()

  const handleSexChange = (value:string) => {
    setSelectedSex(value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userData: RegisterData = {
      firstName: data.get('firstName') as string,
      lastName: data.get('lastName') as string,
      email: data.get('email') as string,
      password: data.get('password') as string,
      birthDate: data.get('birthDate') ? new Date(data.get('birthDate') as string).toISOString() : '',
      sex: data.get('sex') as string,
      phone: data.get('phone') as string
    }

    try {
      const response = await registerUser(userData)
      console.log(response)
      navigate('/login')

      swal({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Ahora puedes iniciar sesión'
      })
    } catch (error:any) {
      console.error(error)

      const errorMessage = error.message

      const detailedErrorMessage = errorMessage.join(', ')
      swal({
        icon: 'error',
        title: 'Error',
        text: `No se pudo registrar el usuario: ${detailedErrorMessage}`
      })
    }
  }

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Crear Cuenta
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='Nombres'
                  autoFocus
                  aria-label='Nombres'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Apellidos'
                  name='lastName'
                  autoComplete='family-name'
                  aria-label='Apellidos'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Correo Electronico'
                  name='email'
                  autoComplete='email'
                  aria-label='Correo Electrónico'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Contraseña'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  aria-label='Contraseña'
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name='birthDate'
                    label='Fecha de Nacimiento'
                    sx={{ width: 400 }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='sex'
                  label='Sexo'
                  id='sex'
                  select
                  value={selectedSex}
                  onChange={(event) => handleSexChange(event.target.value)}
                  aria-label='Sexo'
                >
                  <MenuItem value=''>Seleccione...</MenuItem>
                  <MenuItem value='Male'>Masculino</MenuItem>
                  <MenuItem value='Female'>Femenino</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='phone'
                  label='Telefono'
                  id='phone'
                  inputProps={{ maxLength: 10 }}
                  aria-label='Teléfono'
                />
              </Grid>

            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/login' variant='body2'>
                  Ya tienes una cuenta? Iniciar Session
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}
