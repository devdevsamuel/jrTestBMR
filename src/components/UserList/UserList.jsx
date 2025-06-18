import PropTypes from 'prop-types';
import UserCard from '../UserCard/UserCard';

const UserList = ({ users, loading, error, onViewMore }) => {
  if (error) {
    return (
      <div className="text-red-500 text-center py-4">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center text-gray-500 h-[300px]">
        Obteniendo usuarios...
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="col-span-full flex justify-center items-center text-gray-500 h-[300px]">
        No hay usuarios con esta búsqueda
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 "
      role="list"
      aria-label="Lista de usuarios filtrados"
    >
      {users.map((user) => (
        <UserCard key={user?.id} user={user} onViewMore={onViewMore} />
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onViewMore: PropTypes.func.isRequired,
};

export default UserList;
