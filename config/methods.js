/* eslint-disable prettier/prettier */

import {
    Proxy
} from './fetch';

let myProxy = new Proxy();

export async function Get_News_by_Query(query) {
    try {
        let result = await myProxy.Get_News_by_Query(query);
        //console.warn(result.results)
        return {
            docs: result?.results,
            error: false
        }

    } catch (err) {
        //  console.log(err)
        return {
            docs: null,
            error: true
        }
    }
}

export async function Get_by_search(keyword) {
    try {
        let result = await myProxy.Get_by_search(keyword);
        //console.log(result)
        return {
            SearchData: result?.response?.docs,
            error: false,
            loading: false
        }
    } catch (err) {
        //  console.log(err)
        return {
            SearchData: null,
            error: true,
            loading: false
        }
    }
}