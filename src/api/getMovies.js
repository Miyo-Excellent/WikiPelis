//  Dependencies
import axios from 'axios';

import config from '../config';

export default async function getMovies(options = {}) {
  let url = config.omd.url;

  if (options) {
    const {
      search = '',
      type = '' || 'movie' || 'series' || 'episode',
      plot = '' || 'full' || 'short',
      typeOfDataReturn = '' || 'json' || 'xml',
      page = 1 || 100,
      id = ''
    } = options;

    if (id) url += `&i=${id}`;
    else {
      if (type) url += `&t=${type}`;
      if (plot) url +=`&plot=${plot}`;
      if (typeOfDataReturn) url += `&r=${typeOfDataReturn}`;
      if (search) url += `&s=${search}`;
      if (page > 1) url += `&page=${page}`;
    }
  }

  return await axios.get(url);
}
