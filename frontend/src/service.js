import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class service {
	Service(customer) {
		return axios.post(""+USER_API_BASE_URL, customer);
	}
}

export default new service();