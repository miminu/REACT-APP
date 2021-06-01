import { Component } from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from './Table';
import "./mpage.css";

class mAccount extends Component{
    constructor(props) {
        super(props)
        this.state = {
            host: '',
        }
    }
    
    //db 데이터 얻어오는 부분. 백엔드 연동시 필요 없는 부분이라고 생각.
    componentDidMount() {
        this._getHost();
        this._getData();
    }
    
    _getHost = async() => {
        const res = await axios.get('/api/host');
        this.setState({ host : res.data.host })
    }

    _getData = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data)
    }

    render(){
        return(
            <div>
                <Link to="/" style={{textDecoration: 'none'}}>
                <h1 id="logo">Walking On The Cloud</h1>
                </Link>
                <hr></hr>
                <div className='main'>
                    <div id='main-left'>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3 id="banner">식당 메뉴 추가 및 수정</h3>
                        </Link>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3 id="banner">테이블 예약 현황</h3>
                        </Link>
                        <Link to="/" style={{textDecoration: 'none'}}>
                        <h3 id="banner">테이블 수동 예약</h3>
                        </Link>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3 id="banner">테이블 개수 변경</h3>
                        </Link>
                        <Link to="/sample" style={{textDecoration: 'none'}}>
                        <h3 id="banner">통계량</h3>
                        </Link>
                        <Link to="/mAccount" style={{textDecoration: 'none'}}>
                        <h3 id="banner">관리자 계정 생성</h3>
                        </Link>
                    </div>

                    <div id='main'>
                        <h3 id='sub'>관리자 계정 생성</h3>
                        <p id="remark">(최대 3개 생성 가능)</p>
                        <br></br>
                        <div style={{ padding: '30px' }}>
                        <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mAccount;