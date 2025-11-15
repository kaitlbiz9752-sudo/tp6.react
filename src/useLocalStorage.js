import { useState } from 'react';

function useLocalStorage(key, valeurInitiale) {
  const [valeur, setValeur] = useState(() => {
    const sauvegarde = localStorage.getItem(key);
    return sauvegarde ? JSON.parse(sauvegarde) : valeurInitiale;
  });

  const mettreAJour = (nouvelleValeur) => {
    setValeur(nouvelleValeur);
    localStorage.setItem(key, JSON.stringify(nouvelleValeur));
  };

  return [valeur, mettreAJour];
}

export default useLocalStorage;
