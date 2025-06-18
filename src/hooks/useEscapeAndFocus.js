import { useEffect } from 'react';

/**
 * Hook que enfoca un elemento al montar y ejecuta una función al presionar Escape.
 * @param {Function} onEscape - Función que se ejecuta al presionar la tecla Escape.
 * @param {Object} ref - Ref del elemento que debe recibir el foco al montar.
 */
const useEscapeAndFocus = (onEscape, ref) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onEscape?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Foco inicial en el contenido al montar
    if (ref?.current) {
      ref.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscape, ref]);
};

export default useEscapeAndFocus;
