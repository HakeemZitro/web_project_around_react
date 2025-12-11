import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';
import { api } from './Main/components/Utils/Api.js';
import { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUser()
    .then(res => setCurrentUser(res))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;