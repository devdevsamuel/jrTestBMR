import PropTypes from 'prop-types';
import { useRef } from 'react';
import useEscapeAndFocus from '../../hooks/useEscapeAndFocus';
import useModalAnimation from '../../hooks/useModalAnimation';

const UserModal = ({ user, onClose }) => {
  const contentRef = useRef(null);
  const closeButtonRef = useRef(null);


  const { show: showContent, animate } = useModalAnimation(!!user, 200);

  useEscapeAndFocus(onClose, contentRef);


  if (!user || typeof user !== 'object' || !showContent) return null;

  const {
    id,
    name = 'Nombre no disponible',
    phone = 'No disponible',
    website,
    address = {},
    company = {}
  } = user || {};


  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`bg-white p-6 rounded-xl w-96 relative shadow-2xl transform transition-all duration-500 ease-out ${
          animate
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-75 translate-y-10'
        }`}
      >
        <div
          ref={contentRef}
          tabIndex="-1"
          aria-describedby="modal-description"
          className="sr-only"
        >
          Información del usuario: {name ?? 'Nombre no disponible'},
          Dirección: {address?.street ?? 'No disponible'},
          Teléfono: {phone ?? 'No disponible'},
          Compañía: {company?.name ?? 'No disponible'}.
        </div>

        <button
          ref={closeButtonRef}
          onClick={() => onClose?.()}
          className="absolute top-2 right-2 text-lg"
          aria-label="Cerrar modal"
        >
          ❌
        </button>

        <div className="flex flex-col items-center mb-4">
            <img
              src={`https://i.pravatar.cc/150?u=${id}`}
              alt={`Avatar de ${name ?? 'usuario'}`}
              className="w-20 h-20 rounded-full shadow-md"
            />
        </div>

        <h3 id="modal-title" className="text-2xl font-bold mb-2 text-center">
          {name ?? 'Nombre no disponible'}
        </h3>

        <p id="modal-description" className="text-sm text-gray-700 text-center">
          Dirección: {address.street ?? 'No disponible'}
        </p>
        <p className="text-sm text-gray-700 text-center">
          Teléfono: {phone ?? 'No disponible'}
        </p>
        <p className="text-sm text-gray-700 text-center">
          Compañía: {company?.name ?? 'No disponible'}
        </p>

        {website && (
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-3 block text-center underline"
          >
            {website}
          </a>
        )}
      </div>
    </div>
  );
};

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
