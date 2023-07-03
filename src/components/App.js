import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
	const [currentUser, setCurrentUser] = React.useState([]);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
		React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
		React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState(null);
	const [cards, setCards] = React.useState([]);

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		api
			.changeLikeCardStatus(card, !isLiked)
			.then((newCard) => {
				setCards((state) =>
					state.map((c) => (c._id === card._id ? newCard : c))
				);
			})
			.catch((err) => {
				console.log(err.status);
			});
	}

	function handleCardDel(card) {
		api
			.deleteCard(card)
			.then((res) => {
				setCards((state) => state.filter((c) => c._id !== card._id));
			})
			.catch((err) => {
				console.log(err.status);
			});
	}

	React.useEffect(() => {
		Promise.all([api.getInitialCards(), api.getUserInfo()])
			.then(([initialCards, userInfo]) => {
				setCards(initialCards);
				setCurrentUser(userInfo);
			})
			.catch((err) => {
				console.log(err.status);
			});
	}, []);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleUpdateUser({ name, about }) {
		api
			.editProfile({ name, about })
			.then((userInfo) => {
				setCurrentUser(userInfo);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err.status);
			});
	}

	function handleUpdateAvatar({ avatar }) {
		api
			.editAvatar({ avatar })
			.then((userInfo) => {
				setCurrentUser(userInfo);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err.status);
			});
	}

	function handleAddPlaceSubmit({ name, link }) {
		api
			.addNewCard({ name, link })
			.then((newCard) => {
				setCards([newCard, ...cards]);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err.status);
			});
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<Header />
				<Main
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					handleCardClick={handleCardClick}
					handleCardLike={handleCardLike}
					cards={cards}
					handleCardDel={handleCardDel}
				/>
				<Footer />
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen && "popup_openend"}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen && "popup_openend"}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>

				<PopupWithForm
					title="Вы уверены?"
					name="delete-place"
					buttonSubmitText="Да"
					onClose={closeAllPopups}
				/>
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen && "popup_openend"}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>

				{selectedCard && (
					<ImagePopup card={selectedCard} onClose={closeAllPopups} />
				)}
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
