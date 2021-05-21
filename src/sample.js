import { Component } from "react"
import { Link } from 'react-router-dom';
import "./reservationCheck.css";

class sample extends Component{
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
            </div>
        </div>
      </body>
    );
  }
}

export default sample;
