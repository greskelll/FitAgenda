import { useState } from 'react';

function Modal({ content, children }) {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className="Modal">
			{!isOpened && children({ isOpened, setIsOpened })}
			{isOpened && (
				<div>
					<input
						type="submit"
						className="close"
						value="X"
						onClick={() => setIsOpened(false)}
					></input>
					{content}
				</div>
			)}
		</div>
	);
}

export default Modal;
