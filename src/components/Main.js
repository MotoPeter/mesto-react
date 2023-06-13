import React from 'react';
import plus from "../images/plus.svg";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
	return (
		<main className="content">
			<section className="profile">
				<img alt="аватар" className="profile__avatar" />
				<button
					className="profile__avatar-button"
					onClick={onEditAvatar}
				></button>
				<div className="profile__info">
					<div className="profile__text">
						<h1 className="profile__name">Петр</h1>
						<p className="profile__ocupation">Байкер</p>
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
				<template id="placeTemplate">
					<article className="place">
						<button
							type="button"
							className="button place__image-button popup__save_condition_hover"
						>
							<img className="place__image" />
						</button>
						<div className="place__text">
							<h2 className="place__title"></h2>
							<div className="like">
								<button
									type="button"
									className="place__like button button_condition_hover"
								>
									<img src="<%=require('./images/like.svg')%>" alt="лайк." />
								</button>
								<span className="place__like-sum">5</span>
							</div>
						</div>
						<button
							type="button"
							className="place__trash button button_condition_hover"
						>
							<img
								src="<%=require('./images/trash.svg')%>"
								alt="кнопка удаления."
							/>
						</button>
					</article>
				</template>
			</section>
		</main>
	);
}

export default Main;
