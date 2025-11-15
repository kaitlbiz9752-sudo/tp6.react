import { useState, useEffect } from 'react';

function Horloge() {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setHeure(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>Heure actuelle : {heure.toLocaleTimeString()}</p>;
}

export default Horloge;
