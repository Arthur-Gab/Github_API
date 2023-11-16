import { createPortal } from 'react-dom';

function Backdrop(props) {
	return (
		<div
			aria-hidden={true}
			className="fixed top-0 left-0 w-screen h-screen z-40 bg-black/50"
			// Reservado para quando se desejar fechar o Modal ao Clicar fora
			onClick={() => {
				props.onClick();
			}}
		/>
	);
}

function Dialog(props) {
	return (
		<div
			role="dialog"
			aria-modal={true}
			className="fixed top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-50 w-11/12 dark:bg-black-24 bg-white max-w-[640px] rounded py-6 px-4"
		>
			{props.children}
		</div>
	);
}

const overlays = document.querySelector('#overlays');

function Modal(props) {
	return (
		<>
			{createPortal(<Backdrop onClick={props.onClose} />, overlays)}
			{createPortal(
				<Dialog className={props.className}>{props.children}</Dialog>,
				overlays
			)}
		</>
	);
}

export default Modal;
