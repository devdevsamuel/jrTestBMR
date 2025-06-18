import { useEffect, useState } from 'react';

/**
 * Hook que maneja la animación de entrada de un modal.
 * - setShow: controla si se monta el contenido del modal
 * - animate: controla la clase CSS de animación 
 */
export default function useModalAnimation(trigger, delay = 200) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {   
    if (trigger) {
      const timeout = setTimeout(() => {
        setShow(true);
        requestAnimationFrame(() => setAnimate(true)); // Dispara la transicion de tailwind de animación fluida
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setAnimate(false); // opcional si quieres usar animación de salida luego
      const cleanup = setTimeout(() => setShow(false), delay); // mantener visible un momento si se quiere transición inversa
      return () => clearTimeout(cleanup);
    }

  }, [trigger, delay]);

  return { show, animate };
}
