import React, {Component} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NFT from './NFT';

class App extends Component {
  constructor() {
    super();
    this.state = { nNFT: 0, connected:"not-connected", nft_state:[
      { id:0, url:"./assets/1.png", sold:false},
      { id:1, url:"./assets/2.png", sold:false},
      { id:2, url:"./assets/3.png", sold:false},
      { id:3, url:"./assets/4.png", sold:false},
      { id:4, url:"./assets/5.png", sold:false},
      { id:5, url:"./assets/6.png", sold:false},
      { id:6, url:"./assets/7.png", sold:false},
      { id:7, url:"./assets/8.png", sold:false},
      { id:8, url:"./assets/9.png", sold:false},
    ] };
  }
  onConnect = ()=> {
    var newState = this.state;
    newState.connected = "connected";
    this.setState(newState);
  }
  onSold = (id) => {
    var newState = this.state;
    newState.nNFT ++;
    newState.nft_state[id].sold = true;
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <span className={this.state.connected+"-nft"}>My NFTs: {this.state.nNFT}&nbsp;</span>
          <button onClick={this.onConnect}>{this.state.connected=="connected"?"Connected":"Connect Wallet"}</button>
        </div>

        <Container className="nft-row">
          <Row>
            <Col sm="4"><NFT nft_state={this.state.nft_state[0]} onSold={this.onSold} connected={this.state.connected} /> </Col>
            <Col sm="4"><NFT nft_state={this.state.nft_state[1]} onSold={this.onSold} connected={this.state.connected}/> </Col>
            <Col sm="4"><NFT nft_state={this.state.nft_state[2]} onSold={this.onSold} connected={this.state.connected}/> </Col>
          </Row>
          <Row>
            <Col sm="4"><NFT nft_state={this.state.nft_state[3]} onSold={this.onSold} connected={this.state.connected}/> </Col>
            <Col sm="4"><NFT nft_state={this.state.nft_state[4]} onSold={this.onSold} connected={this.state.connected}/> </Col>
            <Col sm="4"><NFT nft_state={this.state.nft_state[5]} onSold={this.onSold} connected={this.state.connected}/> </Col>
          </Row>
          <Row>
            <Col sm="4"><NFT nft_state={this.state.nft_state[6]} onSold={this.onSold} connected={this.state.connected}/> </Col>
            <Col sm="4"><NFT nft_state={this.state.nft_state[7]} onSold={this.onSold} connected={this.state.connected}/> </Col>
            <Col sm="4"><NFT nft_state={this.state.nft_state[8]} onSold={this.onSold} connected={this.state.connected}/> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
