import { useEffect, useState } from "react";
import Input from "../../UI/Input";
import API from "../../services/api";

export default function CreateDev({ onAddDevelopers }) {
	const [github_username, setGithub_username] = useState("");
	const [techs, setTechs] = useState("");
	const [latitude, setLatitude] = useState("");
	const [longitude, setLongitude] = useState("");

	// AutoFill latitude and longitude when rendering
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.log(err);
			},
			{
				timeout: 30000,
			}
		);
	}, []);

	async function handleAddDev(e) {
		e.preventDefault();

		const newDev = {
			github_username,
			techs,
			latitude,
			longitude,
		};

		const response = await API.post("/devs", newDev);

		onAddDevelopers(response.data);

		setGithub_username("");
		setTechs("");
	}

	return (
		<>
			<strong className="text-xl text-center block mb-6">Cadastrar</strong>
			<form onSubmit={handleAddDev}>
				<fieldset className="flex flex-col gap-6 mb-6 text-zinc-500">
					<Input
						id={"github_username"}
						name={"github_username"}
						type={"text"}
						content={"Usuário do Github"}
						required
						value={github_username}
						onChange={(e) => {
							setGithub_username(e.target.value);
						}}
					/>

					<Input
						id={"techs"}
						name={"techs"}
						type={"text"}
						content={"Tecnológias"}
						required
						value={techs}
						onChange={(e) => {
							setTechs(e.target.value);
						}}
					/>

					<div className="flex justify-between gap-8">
						<Input
							id={"latitude"}
							name={"latitude"}
							type={"number"}
							content={"Latitude"}
							required
							value={latitude}
							onChange={(e) => {
								setLatitude(e.target.value);
							}}
						/>

						<Input
							id={"longitude"}
							name={"longitude"}
							type={"number"}
							content={"Longitude"}
							required
							value={longitude}
							onChange={(e) => {
								setLongitude(e.target.value);
							}}
						/>
					</div>
				</fieldset>
				<button
					type="submit"
					className="py-4 bg-violet-500 text-white font-bold w-full rounded"
				>
					Salvar
				</button>
			</form>
		</>
	);
}
