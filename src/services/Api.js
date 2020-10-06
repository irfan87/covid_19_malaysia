import axios from "axios";

const Api = axios
	.get({
		baseURL:
			"https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1",
	})
	.then((res) => console.log(res.data))
	.catch((err) => console.error(err));

export default Api;
