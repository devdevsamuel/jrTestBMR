import PropTypes from 'prop-types';
import { useRef } from "react";
import useEscapeAndFocus from '../../hooks/useEscapeAndFocus';

const UserModal = ({ user, onClose }) => {
  const contentRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEscapeAndFocus(onClose, contentRef);

  if (!user || typeof user !== 'object') return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white p-6 rounded w-96 relative shadow-lg">
        <div
          ref={contentRef}
          tabIndex="-1"
          aria-describedby="modal-description"
          className="sr-only"
        >
          Información del usuario: {user?.name ?? 'Nombre no disponible'},
          Dirección: {user?.address?.street ?? 'No disponible'},
          Teléfono: {user?.phone ?? 'No disponible'},
          Compañía: {user?.company?.name ?? 'No disponible'}.
        </div>

        <button
          ref={closeButtonRef}
          onClick={() => onClose?.()}
          className="absolute top-2 right-2"
          aria-label="Cerrar modal"
        >
          ❌
        </button>

        <div className="flex flex-col items-center mb-4">
          {user?.id && (
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`Avatar de ${user.name ?? 'usuario'}`}
              className="w-16 h-16 rounded-full"
            />
          )}
        </div>

        <h3 id="modal-title" className="text-xl font-bold">
          {user?.name ?? 'Nombre no disponible'}
        </h3>

        <p id="modal-description">Dirección: {user?.address?.street ?? 'No disponible'}</p>
        <p>Teléfono: {user?.phone ?? 'No disponible'}</p>
        <p>Compañía: {user?.company?.name ?? 'No disponible'}</p>

        {user?.website && (
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 block"
          >
            {user.website}
          </a>
        )}
      </div>
    </div>
  );
};

// PropTypes para validar las props del componente
UserModal.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string
    }),
    company: PropTypes.shape({
      name: PropTypes.string
    })
  }),
  onClose: PropTypes.func.isRequired
};

export default UserModal;