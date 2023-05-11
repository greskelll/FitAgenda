import Calendar from 'react-calendar';
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './style/app.scss';
import Muscle from './component/Muscle';
import Modal from './component/Modal';
import Button from './component/Button';

function App() {
	const [message, setMessage] = useState('');
	useEffect(() => {
		fetch('http://localhost:3000/message')
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);
	return (
		<div className="App">
			<h1>{message || 'serveur non chargé, appuyez sur F5'}</h1>
			<Calendar />

			<Modal content={<Muscle />}>
				{({ setIsOpened }) => (
					<Button onClick={() => setIsOpened(true)} />
				)}
			</Modal>
		</div>
	);
}

export default App;
