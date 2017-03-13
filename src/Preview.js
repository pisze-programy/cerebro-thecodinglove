import React, { Component, PropTypes } from 'react';
import './styles.scss';

export default class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!'images' in this.props.image) {
      return <div>loading...</div>
    }

    return (
      <div className='preview'>
        <p className="title">{this.props.image.images.downsized.url}</p>
        <img src={this.props.image.images.downsized.url} />
        <p className="legal">thecodinglove.com</p>
      </div>
    );
  }
}

Preview.propTypes = {
  image: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};
