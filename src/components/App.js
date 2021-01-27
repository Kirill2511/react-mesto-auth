import React from 'react';
import {
  Switch, Route, Redirect, useHistory,
} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import DeletePopup from './DeletePopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/auth';
import ProtectedRoute from './ProtectedRoute';
import authSuccess from '../images/authSuccess.svg';
import authError from '../images/authError.svg';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [isAddPlacePopupOpen, setAddCard] = React.useState(false);
  const [deletedCard, setDeletedCard] = React.useState(null);
  const [isPopupWithDeleteOpen, setPopupWithDelete] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isPopupImageOpen, setPopupImage] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [loggingIn, setLoggingIn] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [tooltipImage, setTooltipImage] = React.useState('');
  const [message, setMessage] = React.useState('');
  const history = useHistory();

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res.data.email) {
            setEmail(res.data.email);
            setLoggingIn(true);
            history.push('/');
          }
        })
        .catch((error) => {
          if (error === 400) console.log('Токен не передан или не верен');
          if (error === 401) console.log('Токен не корректен');
        });
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function onRegister(email, password) {
    auth
      .register(email, password)
      .then((res) => {
        if (res.data.email) {
          setIsInfoTooltipOpen(true);
          setTooltipImage(authSuccess);
          setLoggingIn(true);
          setMessage('Вы успешно зарегистрировались!');
          history.push('/signin');
        }
      })
      .catch((error) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authError);
        setMessage('Что-то пошло не так!  Попробуйте ещё раз.');
        if (error === 'Ошибка: 400') console.log('некорректно заполнены данные');
      });
  }

  function onLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setLoggingIn(true);
          setEmail(email);
          history.push('/');
        }
      })
      .catch((error) => {
        setIsInfoTooltipOpen(true);
        setTooltipImage(authError);
        setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        if (error === 'Ошибка: 400') {
          console.log('не передано одно из полей');
        } else if (error === 'Ошибка: 401') {
          console.log('Пользователь с данным email не найден');
        }
      });
  }

  function onSignOut() {
    localStorage.removeItem('jwt');
    setLoggingIn(false);
    setEmail('');
    history.push('/singin');
  }

  function handleEditProfileClick() {
    setEditProfile(true);
  }

  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  function handleAddCardClick() {
    setAddCard(true);
  }

  function handleCardClick(card) {
    setPopupImage(true);
    setSelectedCard(card);
  }

  function handleDeleteClick(card) {
    setPopupWithDelete(true);
    setDeletedCard(card);
  }

  function closeAllPopups() {
    setEditProfile(false);
    setEditAvatar(false);
    setAddCard(false);
    setPopupImage(false);
    setPopupWithDelete(false);
    setSelectedCard(null);
    setDeletedCard(null);
    setIsInfoTooltipOpen(false);
  }

  function handlerEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function closeByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handlerEscClose);
    document.addEventListener('click', closeByOverlay);
    return () => {
      document.removeEventListener('keydown', handlerEscClose);
      document.removeEventListener('click', closeByOverlay);
    };
  }, []);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, userData]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .likeCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .dislikeCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
          setCards(newCards);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== deletedCard._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateUser(items) {
    setIsLoading(true);
    api
      .setUserInfo(items)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar(item) {
    setIsLoading(true);
    api
      .setUserAvatar(item)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true);
    api
      .postNewCard(newCard)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggingIn={loggingIn} userEmail={email} onSignOut={onSignOut} />
        <Switch>
          <ProtectedRoute exact path="/" loggingIn={loggingIn}>
            <Main
              cards={cards}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddCardClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleDeleteClick}
            />
          </ProtectedRoute>
          <Route path="/singin">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route>
            {loggingIn ? <Redirect to="/" /> : <Redirect to="/singin" />}
          </Route>
        </Switch>
        {loggingIn && <Footer />}

        {/* Попат обновления аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          isClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        {/* Попат редактирования профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        {/* Попат добавления карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          isClose={closeAllPopups}
          postNewCard={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

        {/* Попат подтверждения */}
        <DeletePopup
          isOpen={isPopupWithDeleteOpen}
          isClose={closeAllPopups}
          onDelete={handleCardDelete}
          card={deletedCard}
          isLoading={isLoading}
        />

        {/* Попат увеличения картинки */}
        <ImagePopup
          isOpen={isPopupImageOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          image={tooltipImage}
          message={message}
          loggingIn={loggingIn}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
