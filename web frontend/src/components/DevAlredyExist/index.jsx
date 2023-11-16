import { useEffect, useRef } from 'react';
import Modal from '../../UI/Modal';

function DevAlredyExist(props) {
	const buttonRef = useRef(null);

	useEffect(() => {
		buttonRef.current.focus({ focusVisible: true });
	}, []);

	return (
		<Modal onClose={props.onClose}>
			<h1 class="text-xl text-center block mb-6 font-bold">
				Esse usuário já está cadastrado!
			</h1>
			<button
				ref={buttonRef}
				type="button"
				class="py-4 bg-violet-500 text-white font-bold w-full rounded focus-within:outline focus-within:outline-black focus-within:outline-2"
				onClick={() => {
					props.onClose();
				}}
			>
				OK
			</button>
		</Modal>
	);
}

export default DevAlredyExist;
