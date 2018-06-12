import axios from 'axios';
import config from '../config';

class ItemsApi {
    static searchItems(query) {
        const url = encodeURI(config.api + '/items?q=' + query);
        return axios.get(url);
    }

    static fetchItem(id) {
        const url = encodeURI(config.api + '/items/' + id);
        return axios.get(url);
    }
}

export default ItemsApi