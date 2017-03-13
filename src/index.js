import React from 'react';
import icon from './icon.png';
import Preview from './Preview';

const fetchData = (searchTerm) => {
  const API_KEY = 'dc6zaTOxFJmzC';
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`;

  return fetch(url)
    .then(resp => resp.json())
    .then(resp => resp.data);
};

const Plugin = ({ term, display, actions }) => {
  let match = term.match(/^thecodinglove\s+(.+)/i) || term.match(/(.+)\sthecodinglove$/i);

  if (match) {

    fetchData(match[1]).then(images => {
      const response = images.map((image, index) => ({
        id: index,
        icon,
        title: `Search thecodinglove for ${match[1]}`,
        getPreview: () => <Preview key={index} image={image} actions={actions} />
      }));

      display(response);
    });
  }
};

module.exports = {
  fn: Plugin,
  keyword: 'thecodinglove'
};
