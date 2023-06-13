import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Api from '../utils/api'

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
		React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
		React.useState(false);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
	}

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
			closeAllPopups();
		}
  });

  function handleEscClose(evt) {
		if (evt.key === "Escape") {
			closeAllPopups();
		}
	}

	return (
		<div className="page">
			<Header />
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
			/>
			<Footer />
			<PopupWithForm
				title="Редактировать профиль"
				name="user-edit"
				buttonSubmitText="Сохранить"
				isOpen={isEditProfilePopupOpen && "popup_openend"}
				onClose={closeAllPopups}
				children={
					<fieldset className="popup__fieldset">
						<label className="popup__label">
							<input
								id="name-input"
								name="name"
								value=""
								placeholder="Имя"
								required
								autocomplete="off"
								className="popup__input popup__input-first popup__input_data_name"
								type="text"
								minlength="2"
								maxlength="40"
							/>
							<span className="name-input-error popup__input-error"></span>
						</label>
						<label className="popup__label">
							<input
								id="ocupation-input"
								name="about"
								value=""
								placeholder="Род занятий"
								required
								autocomplete="off"
								className="popup__input popup__input-second popup__input_data_ocupation"
								type="text"
								minlength="2"
								maxlength="200"
							/>
							<span className="ocupation-input-error popup__input-error"></span>
						</label>
					</fieldset>
				}
			></PopupWithForm>

			<PopupWithForm
				title="Новое место"
				name="place-add"
				buttonSubmitText="Создать"
				isOpen={isAddPlacePopupOpen && "popup_openend"}
				onClose={closeAllPopups}
				children={
					<fieldset className="popup__fieldset">
						<label className="popup__label">
							<input
								id="place-input"
								name="name"
								placeholder="Название"
								autocomplete="off"
								className="popup__input popup__input_data_location popup__input-first"
								type="text"
								required
								minlength="2"
								maxlength="30"
							/>
							<span className="place-input-error popup__input-error"></span>
						</label>
						<label className="popup__label">
							<input
								id="link-input"
								name="link"
								placeholder="Ссылка на картинку"
								autocomplete="off"
								className="popup__input_data_link-foto popup__input"
								type="url"
								required
							/>
							<span className="link-input-error popup__input-error"></span>
						</label>
					</fieldset>
				}
			/>

			<PopupWithForm
				title="Вы уверены?"
				name="delete-place"
				buttonSubmitText="Да"
				onClose={closeAllPopups}
				// isOpen={isAddPlacePopupOpen && 'popup_openend'}
			/>
			<PopupWithForm
				title="Обновить аватар"
				name="avatar"
				buttonSubmitText="Сохранить"
				isOpen={isEditAvatarPopupOpen && "popup_openend"}
				onClose={closeAllPopups}
				children={
					<fieldset className="popup__fieldset">
						<input
							type="url"
							name="avatar"
							id="avatar-input"
							placeholder="Ссылка на картинку"
							className="popup__input popup__input_data_avatar"
							required
						/>
						<span className="avatar-input-error popup__input-error"></span>
					</fieldset>
				}
			/>

			<ImagePopup />
		</div>
	);
}

export default App;
