import {ReactNode, memo, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

interface IProps {
  children: ReactNode;
  redirect: string;
}

const Protected: React.FC<IProps> = ({children, redirect}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate(redirect, {state: {back: location.pathname}});
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default memo(Protected);