import React, { useState, useEffect } from 'react';
import MobNavbar from './test2';
import Navbar from './Navbar';

function Newnav() {
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);
  }, []);

  return (
    <div>
      {matches && <Navbar />}
      {!matches && <MobNavbar />}
    </div>
  );
}

export default Newnav;