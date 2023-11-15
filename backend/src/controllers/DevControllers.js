const Dev = require('../models/Dev');
const axios = require('axios');

/* 
	index (mostrar uma lista), show (mostrar somente 1), 
	store (criar), update (alterar), destroy (deletar)
 */
module.exports = {
	// Return all the devs stored and order with the last created is the first to be showed
	async index(req, res) {
		const devs = await Dev.find().sort({ createdAt: -1 }); // O sinal de menos indica ordenação decrescente (da mais recente para a mais antiga)

		return res.json(devs);
	},

	// Only create if the dev isn't created
	async store(req, res) {
		const { github_username, techs, latitude, longitude } = req.body;

		let dev = await Dev.findOne({ github_username }); //

		// If the dev alredy (object == truthy == true) exist don't create, and don't return it, cause he is displayed in the client
		if (dev) {
			return res.status(422).json({ message: 'Dev already exists' });
		}

		// If the dev don't exist create on and return it,  to show it in the client
		if (!dev) {
			const apiResponse = await axios.get(
				`https://api.github.com/users/${github_username}`
			);

			const { name = login, avatar_url, bio } = apiResponse.data;

			const techsArray = techs.split(',').map((tech) => tech.trim());

			const location = {
				type: 'Point',
				coordinates: [longitude, latitude],
			};

			dev = await Dev.create({
				name,
				github_username,
				bio,
				avatar_url,
				techs: techsArray,
				location,
			});
		}

		return res.json(dev);
	},

	// Destroy the selected dev based on his github_username
	async destroy(req, res) {
		const { github_username } = req.body;

		const dev = await Dev.findOneAndDelete({ github_username });

		return res.json(dev);
	},
};
