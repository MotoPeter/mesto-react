import React from "react";

function PopupWithForm({
	title,
	name,
	buttonSubmitText,
	isOpen,
	onClose,
	children,
}) {
	function clickClosePopap(e) {
		//  //если область клика содержит дочерний элемент - открытый попап
		if (e.target.classList.contains("popup_openend")) {
			onClose();
		}
	}

	return (
		<div
			className={`popup ${isOpen} popup_value_${name}`}
			onClick={clickClosePopap}
		>
			<div className="popup__container">
				<button
					type="button"
					className="popup__close button button_condition_hover"
					onClick={onClose}
				></button>
				<h3 className="popup__title">{title}</h3>
				<form className="popup__form" name={name} novalidate>
					{children}
					<button
						type="submit"
						value="сохранить"
						className="popup__save button popup__save_condition_hover"
					>
						{buttonSubmitText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
