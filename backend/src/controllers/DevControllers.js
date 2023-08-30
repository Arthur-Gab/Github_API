const Dev = require("../models/Dev");
const axios = require("axios");

/* 
	index (mostrar uma lista), show (mostrar somente 1), 
	store (criar), update (alterar), destroy (deletar)
 */
module.exports = {
	async index(req, res) {
		const devs = await Dev.find().sort({ createdAt: -1 }); // O sinal de menos indica ordenação decrescente (da mais recente para a mais antiga)

		return res.json(devs);
	},

	async store(req, res) {
		const { github_username, techs, latitude, longitude } = req.body;

		let dev = await Dev.findOne({ github_username });

		if (!dev) {
			const apiResponse = await axios.get(
				`https://api.github.com/users/${github_username}`
			);

			const { name = login, avatar_url, bio } = apiResponse.data;

			const techsArray = techs.split(",").map((tech) => tech.trim());

			const location = {
				type: "Point",
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

	async destroy(req, res) {
		const { github_username } = req.body;

		const dev = await Dev.findOneAndDelete({ github_username });

		return res.json(dev);
	},
};
