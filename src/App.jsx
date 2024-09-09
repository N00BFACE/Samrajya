import './App.css'

function App() {
	return (
		<>
			<h1 className='title'>Samrajya</h1>
			<div className="card">
				<button
					className="btn"
					onClick={() => {
						window.location.reload()
					}}
				>Start a new game</button>
				<button className="btn">Join a game</button>
				<button className="btn">Settings</button>
				<button className="btn">About</button>
			</div>
		</>
	)
}

export default App
