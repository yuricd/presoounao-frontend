import React from 'react';
import { Star } from '../Star/Star';
import './PoliticianCard.scss';
import { API_URL } from '../../config';
import { Loading } from '../Loading/Loading';

export default class PoliticianCard extends React.Component {
  
  state = {
    imgLoaded: false,
  }

  handleImgLoad = () => {
    this.setState({
      imgLoaded: true
    });
  }

  render() {
    const { score, name, position, picture } = this.props;
    const { imgLoaded } = this.state;

    return (
      <div className={`politician-card`}>
        <Star score={score} />
        <div className="picture">
          {(!imgLoaded) && <Loading />}
          <img src={`${API_URL}static/pictures/${picture}`} alt="" onLoad={this.handleImgLoad} />
        </div>
        <h2>{ name }</h2>
        <h4>{ position }</h4>
      </div>
    )
  }
}
