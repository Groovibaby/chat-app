import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Contact
        name="Groovibaby"
        image="https://avatars0.githubusercontent.com/u/58938034?s=460&u=1be3bce5295ba29964a4d3167779de0cc0c1ae5b&v=4"
        online
      />
      <Contact
        name="Edith Morales"
        image="https://randomuser.me/api/portraits/women/82.jpg"
      />
      <Contact
        name="Francisco Graves"
        image="https://randomuser.me/api/portraits/men/55.jpg"
        online
      />
    </div>
  );
}

export default App;
