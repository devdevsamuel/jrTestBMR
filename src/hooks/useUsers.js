import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(true);
  const [error, setError] = useState('');



  // Cargar usuarios al iniciar la página
  // Se usa una promesa para ejecutar la carga de usuarios al montar el componente
  useEffect(() => {
    setGlobalLoading(true);
    fetchUsers()
      .then(data => {
        setUsers(data);
        setGlobalLoading(false);
      })
      .catch(() => {
        setError('No se pudo cargar la información de los usuarios');
        setGlobalLoading(false);
      });
  }, []);

  return { users, globalLoading, error };
};

export default useUsers;
