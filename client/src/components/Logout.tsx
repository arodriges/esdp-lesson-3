import { logoutUser } from '@/features/userSlice';
import { UserContext } from '@/hooks/auth';
import { useAppDispatch } from '@/store/hook';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    if (user?.setToken) {
      user?.setToken('');
    }
    navigate('/');
  };

  return <a onClick={onClick}>Logout</a>;
}
