import { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from './lib/Modal'

const App = () => {
	const [modalOpened, setModalOpened] = useState<boolean>(false)
	const [errorModalOpened, setErrorModalOpened] = useState<boolean>(false)

		//! modal params
		const modalTitle = 'Success !'
		const modalErrTitle = 'Error !'

	//! Fermer le modal
	/**
	 * La fonction `handleCloseModal` permet de fermer le modal qui affiche
	 * les détails de l'employé ou un message d'erreur.
	 */
	const handleCloseModal = () => {
		setModalOpened(false)
		setErrorModalOpened(false)
	}

	return (
		<div>
			      <button onClick={() => setModalOpened(true)}>Open Modal</button>
				<Modal title={modalTitle} opened={modalOpened} onClose={handleCloseModal} content='Yo !' btnText='Close' />
				<Modal title={modalErrTitle} opened={errorModalOpened} onClose={handleCloseModal} content='Oups' btnText='Close' />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
