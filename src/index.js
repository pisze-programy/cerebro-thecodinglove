import React from 'react';
import icon from './icon.png';
import Preview from './Preview';

const fetchData = (searchTerm) => {
  const API_KEY = 'dc6zaTOxFJmzC';
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`;

  console.log(searchTerm, url);

  return fetch(url)
    .then(resp => resp.json())
    .then(resp => resp.data);
};

const Plugin = ({ term, display, actions }) => {
  let match = term.match(/^thecodinglove\s+(.+)/i) || term.match(/(.+)\sthecodinglove$/i);

  if (match) {

    fetchData(match[1]).then(images => {
      display({
        id: 1,
        icon,
        title: `Search for ${term}`,
        getPreview: () => {
          return <Preview images={images} actions={actions} />
        }
      });
    });
  }
};

export {
  Plugin as fn
};
