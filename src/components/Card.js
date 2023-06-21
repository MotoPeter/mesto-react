import React from "react";
import like from "../images/like.svg";
import trash from "../images/trash.svg";

function Card({ card, handleCardClick }) {
	const cardClick = () => {
		handleCardClick(card);
	};

	console.log(`url(${card.link})`);

	return (
		<article class="place">
			<button
				type="button"
				class="button place__image-button popup__save_condition_hover"
				onClick={cardClick}
			>
				<img
					style={{ backgroundImage: `url(${card.link})` }}
					class="place__image"
				/>
			</button>
			<div class="place__text">
				<h2 class="place__title">{card.name}</h2>
				<div class="like">
					<button
						type="button"
						class="place__like button button_condition_hover"
					>
						<img src={like} alt="лайк." />
					</button>
					<span class="place__like-sum">{card.likes.length}</span>
				</div>
			</div>
			<button type="button" class="place__trash button button_condition_hover">
				<img src={trash} alt="кнопка удаления." />
			</button>
		</article>
	);
}

export default Card;
