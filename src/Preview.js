import React, { Component, PropTypes } from 'react';
import './styles.scss';

export default class Preview extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.images);
  }

  render() {
    if (!this.props.images.length) {
      return <div>loading...</div>
    }

    console.log(this.props.images);

    return (
      <div className='preview'>
        {this.props.images.map((image, index) => {
          return <img key={index} src={image.images.downsized.url} alt={image.slug} />
        })}
      </div>
    );
  }
}

Preview.propTypes = {
  images: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
};
