
import logoBmr from '../../assets/logo_BRM_Alta_color.png';

import { useEffect, useRef, useState } from 'react';
import { useLoaderContext } from '../../contexts/LoaderContext/LoaderContext';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserModal from '../../components/UserModal/UserModal';
import useUsers from '../../hooks/useUsers';
import UserList from '../../components/UserList/UserList';

function MainPage() {
  const [modalUser, setModalUser] = useState(null);
  const [search, setSearch] = useState('');
  const { globalLoading } = useLoaderContext();
  const { users, error } = useUsers();

  // Filtrar usuarios por nombre según el valor de búsqueda
  const filteredUsers = users.filter(user =>
    user?.name.toLowerCase()?.includes(search?.toLowerCase())
  );

  const headingRef = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <div className="min-h-screen py-6 flex flex-col items-center overflow-x-hidden">
      {/* navegación principal */}
      <main role="main" className="w-full max-w-4xl px-4">
        {/* Enlace de salto al buscador: PRIMER elemento visible */}
        <a
          href="#search-input"
          className="
          sr-only absolute top-2 left-2 bg-white p-2 border rounded z-50
          focus:not-sr-only"
        >
          Saltar al buscador
        </a>

        <section 
          role="banner" 
          className="
            flex flex-col-reverse mb-4
            sm:flex sm:justify-between sm:flex-row  md:flex:flex-row " 
          aria-labelledby="main-title"
          aria-describedby="screenreader-desc"
        >
          <h1
            id="main-title"
            ref={headingRef}
            tabIndex="-1"
            className="text-3xl font-bold flex flex-col mt-3"
          >
            Directorio de Usuarios
            <span className="text-sm text-gray-500">por Samuel Osorio</span>

          </h1>
          <img src={logoBmr} alt="Logo de BMR" />
        </section>

        <section aria-label="Buscador de usuarios" className="mb-4">
          <SearchBar value={search} onChange={setSearch} />
        </section>

        <section aria-label="Listado de usuarios" className="flex-1">
          <span id="screenreader-desc" className="sr-only">
            Esta es una lista de usuarios. Puedes buscar por nombre seleccionar o navegar atraves de tab.
          </span>
          <UserList
            users={filteredUsers}
            loading={globalLoading}
            error={error}
            onViewMore={setModalUser}
          />
        </section>
      </main>

      <UserModal user={modalUser} onClose={() => setModalUser(null)} />
    </div>
  );
}

export default MainPage;
