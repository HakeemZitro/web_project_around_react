import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { CurrentUserContext } from './contexts/CurrentUserContext.js';
import { api } from './Main/components/Utils/Api.js';
import { useState, useEffect } from 'react';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    (async () => {
      api.getUser()
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      api.editUser(data)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
      .finally(() => handleClosePopup())
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      api.updateAvatar(data)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
      .finally(() => handleClosePopup())
    })();
  };

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
          <Header />
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;