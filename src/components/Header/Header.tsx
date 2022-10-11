import { Stack } from '@mui/material';
import logo from '../../icons/logo.png';

export const Header = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center' mt={5}>
      <img src={logo} alt='Rick and Morty' width={300} />
    </Stack>
  );
};
