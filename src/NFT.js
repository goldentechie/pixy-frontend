import React, {Component} from 'react';
import './NFT.css';

class NFT extends Component {
  render() {
    return (
      <div className={"NFT-card"+(this.props.nft_state.sold?" NFT-sold":"")}>
        <img src={this.props.nft_state.url}></img>
        {this.props.connected=="connected"?(
          <button onClick={()=>this.props.onSold(this.props.nft_state.id)}>
            Buy NFT
          </button>
        ):""}
      </div>
    );
  }
}

export default NFT;
