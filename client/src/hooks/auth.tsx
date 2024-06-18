import { createContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface IUserContext {
  token?: string;
  setToken?: (token: string) => void;
  loading?: boolean;
}

export const UserContext = createContext<IUserContext>({});

export function UserProvider({ children }: Props) {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken as string);
      setLoading(false);
    } else {
      // navigate('/login');
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken, loading }}>{children}</UserContext.Provider>
  );
}
