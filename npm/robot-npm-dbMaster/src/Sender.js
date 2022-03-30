const axios = require('axios');

class Sender {
    _Url
    _config
    _headers

    constructor(url) {
        this._Url = url;
        this._headers = {
            "Content-Type": "application/json"
        }
    }

    _setParams(params){
        for (let i = 0; i < params.length; i++) {
            this._Url = this._Url + '/' + params[i];
        }
    }

    _setQuery(query){
        if(query.length > 0) this._Url = this._Url + '?';
        for (let i = 0; i < query.length; i++) {
            let one = `${query[i]["key"]}=${query[i]["value"]}`
            if(i !== query.length - 1) one = one + `&`;
            this._Url = this._Url + one;
        }
    }

    _send = async (method, one_all = 'one', params = [], data = {}, query = []) => {
        try {
            if(method === 'get') {
                if(one_all === 'one') this._Url = this._Url + '/one';
                else this._Url = this._Url + '/all';
                this._setParams(params);
                this._setQuery(query);

                this._config = {
                    url: this._Url,
                    method: "get",
                    headers: {}
                }
            } else {
                this._setParams(params);
                this._setQuery(query);
                this._config = {
                    url: this._Url,
                    method,
                    headers: this._headers,
                    data: JSON.stringify(data)
                }
            }
            console.log(111, this._config);
            return await axios(this._config);
        } catch (error) {
            return ({ status: 400, data: { msg: "FATAL SENDING REQUEST!", error } });
        }
    }

    GET = async (one_all, params = [], query = []) => {
        return await this._send('get', one_all, params,   {}, query);
    }

    POST = async (params = [], data = {}, query = []) => {
        return await this._send('post', 'one', params, data, query);
    }

    PATCH = async (params = [], data = {}, query = []) => {
        return await this._send('patch', 'one', params, data, query);
    }

    DELETE = async (params = [], data = {}, query = []) => {
        return await this._send('delete', 'one', params, data, query);
    }
}

module.exports = { Sender };