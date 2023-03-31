import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');
	useEffect(() => {
		fetch('http://localhost:3001/message')
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);
	return (
		<div className="App">
			<h1>{message}</h1>
			<Calendar />
		</div>
	);
}

export default App;
