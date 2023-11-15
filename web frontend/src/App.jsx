import { useState, useEffect } from 'react';
import DevCard from './components/DevCard';
import CreateDev from './components/CreateDev';
import API from './services/api';

import { HiMiniArrowTopRightOnSquare as LinkArrow } from 'react-icons/hi2';

export default function App() {
	const [addDevs, setAddDevs] = useState([]);

	useEffect(() => {
		async function loadDevs() {
			const response = await API.get('/devs');

			setAddDevs(response.data);
		}
		loadDevs();
	}, []);

	function handlerAddDevs(newDev) {
		setAddDevs((prevDevs) => [newDev, ...prevDevs]);
	}

	async function handlerFindOneAndRemove(github_username) {
		const response = await API.delete('/devs', {
			data: { github_username },
		});

		const filteredDevs = addDevs.filter(
			(dev) => dev.github_username !== response.data.github_username
		);

		setAddDevs(filteredDevs);
	}

	const DevsList = addDevs.map((dev) => (
		<DevCard
			key={dev._id}
			name={dev.name}
			github_username={dev.github_username}
			bio={dev.bio}
			avatar_url={dev.avatar_url}
			techs={dev.techs}
			onRemoveDevelopers={handlerFindOneAndRemove}
		/>
	));

	return (
		<>
			<main className="py-6 px-4 container mx-auto flex max-sm:flex-col max-sm:items-center gap-8 flex-1">
				<aside className="max-w-xs shadow-md rounded bg-white px-4 py-6 h-fit">
					<CreateDev onAddDevelopers={handlerAddDevs} />
				</aside>

				<section className="w-full">
					<ul className=" lg:grid-cols-2 gap-8 lg:grid max-lg:flex max-lg:flex-col">
						{addDevs.length === 0 && (
							<div className="p-8 shadow shadow-neutral-400 rounded bg-white duration-1000">
								<p className="text-neutral-700 text-center">
									"Ops! Estamos com falta de Devs 👀".
								</p>
							</div>
						)}
						{DevsList}
					</ul>
				</section>
			</main>
			<footer className="py-6 px-4 container mx-auto text-sm text-center">
				<a
					href="https://www.linkedin.com/in/art2354/"
					target="_blank"
					className="flex justify-center items-center gap-4 text-white"
				>
					<span>
						© 2023 Arthur Gabriel & RocketSeat 💜
						<br />
						Todos os direitos reservados.
					</span>
					<LinkArrow size={24} />
				</a>
			</footer>
		</>
	);
}
