import React, { Component } from 'react';
import Modal from "react-awesome-modal";
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { Link } from 'react-router-dom'
import "./reservationCheck.css";
import NaverMapAPI from "./NaverAPIMap.js";

class reservationCheck extends Component {
    constructor(props) {
      super(props);
      this.state = {
          chagevisible : false,
          cancelvisible : false,
          checkvisible : false 
      }
    }
    _openchangeModal = function() {
      this.setState({
          changevisible : true
      });
    }
    _closechangeModal = function() {
      this.setState({
          changevisible : false
      });
    }
    _opencancelModal = function() {
      this.setState({
          cancelvisible : true
      });
    }
    _closecancelModal = function() {
      this.setState({
          cancelvisible : false
      });
    }
    _opencheckModal = function() {
      this.setState({
          cancelvisible : false,
          checkvisible: true
      });
    }
    _closecheckModal = function() {
      this.setState({
          checkvisible : false
      });
    }
  
    render(){
      return (
        <body>
          <Link to="/">
          <h1 class="logo">Walking On The Cloud</h1>
          </Link>
          <h2 class="description">European Restaurant & Bar</h2>
          <hr></hr>
          <div id="content">
            <h1 class="main-head">YOUR RESERVATION</h1>
            <div class="main-middle">
              <h4>예약 내역</h4>
              <hr></hr>
              <p>예약 일시 | 2021.5.4(화) 오후 17:30</p>
              <p>예약 인원 | 2명</p>
              <br></br>
              <p>알립니다!</p>
              <hr></hr>
              <p>예약 후 사정상 못 나오실 경우 미리 예약취소 부탁드립니다.</p>
              <p>동시간대 손님이 몰릴경우 음식이 다소 늦게 나오는 점 미리 양해 말씀드립니다.</p>
            
              <div class="map">
                <RenderAfterNavermapsLoaded
                  ncpClientId={'wsxmj4f2y1'} 
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading...</p>}
                >
                  <NaverMapAPI />
                </RenderAfterNavermapsLoaded>
                <p>서울 영등포구 63로 50 한화금융센터_63 59층</p>
                <p>Tel. 02 - 1234 - 1234</p>
              </div>
            </div>
            <div class="main-foot">
              <button onClick={this._openchangeModal.bind(this)}>예약 변경</button>
              <button onClick={this._opencancelModal.bind(this)}>예약 취소</button>
              <Modal visible={this.state.changevisible} width="400" height="300"  effect="fadeInDown" onClickAway={() => this._closechangeModal()}>
                    <div id="modal">
                      <button id="close" onClick={() => this._closechangeModal()}>X</button>
                      <br></br>
                      <br></br>
                      <div class="modal-middle">
                        <h4>예약 내역</h4>
                        <hr></hr>
                        <p>예약 일시 | 2021.5.4(화) 오후 17:30</p>
                        <p>예약 인원 | 2명</p>
                        </div>
                        <p>예약을 변경하시겠습니까?</p>
                        <Link to="/sample">
                      <button id="modal" onClick={this._closechangeModal.bind(this)}>예</button>
                      </Link>
                      <button  id="modal" onClick={this._closechangeModal.bind(this)}>아니오</button>
                    </div>
                </Modal>
                <Modal visible={this.state.cancelvisible} width="400" height="300"  effect="fadeInDown" onClickAway={() => this._closecancelModal()}>
                    <div id="modal">
                    <button id="close" onClick={() => this._closecancelModal()}>X</button>
                      <br></br>
                      <br></br>
                      <div class="modal-middle">
                        <h4>예약 내역</h4>
                        <hr></hr>
                        <p>예약 일시 | 2021.5.4(화) 오후 17:30</p>
                        <p>예약 인원 | 2명</p>
                        </div>
                        <p>예약을 취소하시겠습니까?</p>
                      <button  id="modal" onClick={this._opencheckModal.bind(this)}>예</button>
                      <button  id="modal" onClick={this._closecancelModal.bind(this)}>아니오</button>
                    </div>
                </Modal>
                <Modal visible={this.state.checkvisible} width="400" height="280"  effect="fadeInDown" >
                    <div id="modal">
                        <Link to="/sample">
                        <button id="close" onClick={() => this._closecheckModal()}>X</button>
                        </Link>
                        <br></br>
                        <br></br>
                        <div class="modal-cancel">
                            <p>예약이 취소되었습니다.</p>
                        </div>
                        <Link to="/sample">
                          <button  id="modal" onClick={this._closecheckModal.bind(this)}>확인</button>
                        </Link>
                    </div>
                </Modal>
            </div>
          </div>
        </body>
      );
    }
  }
  
  export default reservationCheck;