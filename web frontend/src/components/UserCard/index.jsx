import { BsXLg } from "react-icons/bs";
// import Dobberman from "../../assets/doberman.jpg";

export default function UserCard({
	name,
	github_username,
	bio,
	avatar_url,
	techs,
	onRemoveDevelopers,
}) {
	return (
		<li className="bg-white rounded w-full p-4 relative">
			<header className="flex items-center gap-4">
				<img
					className="user-card-picture"
					src={avatar_url}
					alt={`Foto de perfil do(a) ${name}`}
				/>
				<div>
					<strong className="text-lg">{name}</strong>
					<p className="text-neutral-700">{techs.join(", ")}</p>
				</div>
			</header>
			<p
				className="mt-4 mb-2 w-full"
				disabled
				rows={4}
			>
				{bio}
			</p>
			<a
				href={`https://github.com/${github_username}`}
				target="_blank"
				className="text-violet-500"
			>
				Acessar perfil no Github
			</a>
			<div className="absolute z-50 top-0 right-0">
				<button
					aria-label={"Remover dev"}
					className="p-4 z-50 text-violet-500 hover:bg-violet-200 hover:text-red-600 transition-all duration-300 rounded-full"
					onClick={() => {
						onRemoveDevelopers(github_username);
					}}
				>
					<BsXLg
						size={24}
						strokeWidth={1}
						focusable={false}
						aria-hidden={true}
					/>
				</button>
			</div>
		</li>
	);
}
