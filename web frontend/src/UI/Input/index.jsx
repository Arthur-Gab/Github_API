export default function Input(props) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={props.id}>{props.content}</label>
			<input
				className="w-full border-b-zinc-300 border-b-2 text-zinc-600"
				{...props}
			/>
		</div>
	);
}
