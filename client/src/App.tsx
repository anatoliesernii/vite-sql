import { useRef } from 'react';
import './App.css';

function App(): JSX.Element {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleButtonClick = (): void => {
		const inputValue = inputRef.current?.value;
		// Do something with the inputValue, if needed
		console.log(inputValue);
	};

	return (
		<div>
			<div>{inputRef.current?.value}</div>
			<input type="text" ref={inputRef} />
			<button onClick={handleButtonClick}>Submit</button>
		</div>
	);
}

export default App;
