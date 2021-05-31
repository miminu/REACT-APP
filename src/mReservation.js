import { Component } from "react"
import { Link } from 'react-router-dom';
import "./mpage.css";

class mReservation extends Component{
    
    render(){
        return(
            <div>
                <Link to="/" style={{textDecoration: 'none'}}>
                <h1>Walking On The Cloud</h1>
                </Link>
                <hr></hr>
                <div className='main'>
                    <div id='main-left'>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3>식당 메뉴 추가 및 수정</h3>
                        </Link>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3>테이블 예약 현황</h3>
                        </Link>
                        <Link to="/" style={{textDecoration: 'none'}}>
                        <h3>테이블 수동 예약</h3>
                        </Link>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3>테이블 개수 변경</h3>
                        </Link>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3>통계량</h3>
                        </Link>
                        <Link to="/mAccount" style={{textDecoration: 'none'}}>
                        <h3>관리자 계정 생성</h3>
                        </Link>
                    </div>

                    <div id='main'>
                        <h3 id='sub'>테이블 수동 예약</h3>
                        <br></br>
                        <div className="input">
                            <div id='input'>
                                <p>테이블 번호</p>
                                <input type='text' />
                            </div>
                            <div  id='input'>
                                <p>예약자 ID</p>
                                <input type='text' />
                            </div>
                            <div  id='input'>
                                <p>예약자 이름</p>
                                <input type='text' />
                            </div>
                        </div>
                        <div className="input">
                            <div id='input'>
                                <p>예약 인원</p>
                                <input type='text' />
                            </div>
                            <div id='input'>
                                <p>예약 일시</p>
                                <input type='text' />
                            </div>
                        </div>
                        <div className="input2">
                            <div id='input2'>
                                <p>요청사항</p>
                                <textarea cols="60" rows="4" className="noresize"></textarea>
                            </div>
                        </div>
                        <div className="input3">
                            <button id="mpage" type="submit" onClick={()=>alert('예약되었습니다.')}>예약</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mReservation;