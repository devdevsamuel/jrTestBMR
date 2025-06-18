import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => (
  <div className="w-full">
    <label htmlFor="userSearch" className="sr-only">Buscar usuario</label>
    <input
      id="search-input"
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Buscar por nombre"
      className="border p-2 rounded w-full"
    />
  </div>
);

// PropTypes para validar las props del componente
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;

