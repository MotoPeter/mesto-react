import React from "react";
import like from "../images/like.svg";
import trash from "../images/trash.svg";

function Card({ card, handleCardClick }) {
	const cardClick = () => {
		handleCardClick(card);
	};

	return (
		<article className="place">
			<button
				type="button"
				className="button place__image-button popup__save_condition_hover"
				onClick={cardClick}
			>
				<img
					style={{ backgroundImage: `url(${card.link})` }}
					className="place__image"
				/>
			</button>
			<div className="place__text">
				<h2 className="place__title">{card.name}</h2>
				<div className="like">
					<button
						type="button"
						className="place__like button button_condition_hover"
					>
						<img src={like} alt="лайк." />
					</button>
					<span className="place__like-sum">{card.likes.length}</span>
				</div>
			</div>
			<button type="button" className="place__trash button button_condition_hover">
				<img src={trash} alt="кнопка удаления." />
			</button>
		</article>
	);
}

export default Card;
