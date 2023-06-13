import React from 'react';

function ImagePopup() {
	return (
		<div className="popup popup_value_img">
				<div className="popup__img">
					<button
						type="button"
						className="popup__close popup__close_value_img button button_condition_hover"
					></button>
					<figure className="figure popup__figure">
						<img src="#" className="figure__img" alt="" />
						<figcaption className="figure__caption"></figcaption>
					</figure>
				</div>
			</div>
	);
}

export default ImagePopup;