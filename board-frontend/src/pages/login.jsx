import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material'

const login = () => {
   return (
      <Container maxWidth="sm">
         <Typography variant="h4" gutterBottom>
            로그인
         </Typography>

         {/* {error && (
            <Typography color="error" align="center">
               {error}
            </Typography>
         )} */}

         <form>
            <TextField label="이메일" name="email" fullWidth margin="normal" />
            <TextField label="비밀번호" type="password" name="password" fullWidth margin="normal" />

            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ position: 'relative', marginTop: '20px' }}>
               로그인
            </Button>
         </form>
      </Container>
   )
}

export default login
