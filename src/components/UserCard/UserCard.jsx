import PropTypes from 'prop-types';

const UserCard = ({ user, onViewMore }) => {
  if (!user) return null;

  const { id, name, email } = user ?? {};

  return (
    <article
      className="bg-white py-4 rounded shadow-md  flex flex-col items-center mt-7"
      aria-label={`Tarjeta de usuario: ${name ?? 'Nombre no disponible'}`}
    >
      <img
        src={`https://i.pravatar.cc/150?u=${id ?? 'default'}`}
        alt={`Avatar de ${name ?? 'usuario sin nombre'}`}
        className="w-16 h-16 rounded-full "
      />

      <h2 className="text-lg font-semibold" id={`user-name-${id}`}>
        {name ?? 'Nombre no disponible'}
      </h2>

      <p id={`user-email-${id}`}>
        {email ?? 'Email no disponible'}
      </p>

      <button
        onClick={() => onViewMore?.(user)}
        className="mt-2 text-blue-500 underline"
        aria-labelledby={`user-name-${id} user-email-${id}`}
        aria-label={`Ver más información sobre ${name ?? 'este usuario'}`}
      >
        Ver más
      </button>
    </article>
  );
};

// PropTypes para validar las props del componente
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onViewMore: PropTypes.func.isRequired,
};

export default UserCard;
