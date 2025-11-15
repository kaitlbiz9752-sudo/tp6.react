import { useRef, useEffect } from 'react';

function CompteurRendu() {
  const compteur = useRef(0);

  useEffect(() => {
    compteur.current += 1;
    console.log(`Le composant a été affiché ${compteur.current} fois.`);
  });

  return <div>Regarde la console pour voir le nombre de rendus.</div>;
}

export default CompteurRendu;
