import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material';
import api from '../api';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const SignInPage = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    api.post('/users/signin', data)
      .then(response => {
        localStorage.setItem('token', response.data.access);
        navigate('/')

      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setErrors(error.response.data)

        } else if (error.response && error.response.status === 401) {
          toast.error('Usuário e senha inválidos.')

        } else {
          toast.error('Ocorreu um erro inesperado, por favor tente novamente.')

        }
      })
  }

  return (
    <Box sx={{ height: '100vh', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ width: { xs: '90%', sm: '500px' } }} elevation={10} component='form' onSubmit={onSubmit}>
        <CardHeader
          title={<FormatListBulletedIcon />}
          titleTypographyProps={{ textAlign: 'center' }}
          subheader="To Do List"
          subheaderTypographyProps={{ textAlign: 'center' }}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <TextField
            name="username"
            label="Usuário"
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            name="password"
            label="Senha"
            error={!!errors.password}
            helperText={errors.password}
          />
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
          <Button size="small" color="primary" variant="contained" type="submit">
            Entrar
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default SignInPage;
