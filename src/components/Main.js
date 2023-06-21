import React from "react";
import plus from "../images/plus.svg";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, handleCardClick }) {
	const [isUserInfo, setIsUserInfo] = React.useState({
		userName: "",
		userDescription: "",
		userAvatar: "",
	});

	const [isCards, setIsCards] = React.useState([]);

	React.useEffect(() => {
		Promise.all([api.getInitialCards(), api.getUserInfo()])
			.then(([initialCards, userInfo]) => {
				const userId = userInfo._id;
				setIsUserInfo({
					userName: userInfo.name,
					userDescription: userInfo.about,
					userAvatar: userInfo.avatar,
				});
				setIsCards(initialCards);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<img
					style={{ backgroundImage: `url(${isUserInfo.userAvatar})` }}
					className="profile__avatar"
				/>
				<button
					className="profile__avatar-button"
					onClick={onEditAvatar}
				></button>
				<div className="profile__info">
					<div className="profile__text">
						<h1 className="profile__name">{isUserInfo.userName}</h1>
						<p className="profile__ocupation">{isUserInfo.userDescription}</p>
					</div>
					<button
						type="button"
						className="profile__edit-button button button_condition_hover"
						onClick={onEditProfile}
					></button>
				</div>
				<button
					type="button"
					className="profile__add-button button button_condition_hover"
					onClick={onAddPlace}
				>
					<img src={plus} alt="плюс." className="profile__add-button-image" />
				</button>
			</section>
			<section className="grid-places">
				{isCards.map((card) => (
					<Card key={card._id} card={card} handleCardClick={handleCardClick} />
				))}
			</section>
		</main>
	);
}

export default Main;
