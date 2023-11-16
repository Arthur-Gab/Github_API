export default function Input(props) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={props.id}>{props.content}</label>
			<input
				className="w-full border-b-zinc-300 border-b-2 text-zinc-600 rounded focus-within:outline focus-within:outline-black focus-within:outline-2"
				{...props}
			/>
		</div>
	);
}
