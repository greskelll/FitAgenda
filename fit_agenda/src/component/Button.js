function Button({ onClick, value }) {
	return (
		<div>
			<input
				type="submit"
				value={value || 'Cliquez moi'}
				onClick={onClick}
			></input>
		</div>
	);
}

export default Button;
