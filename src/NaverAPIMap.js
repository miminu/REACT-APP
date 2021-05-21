import React from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

function NaverMapAPI(){
    const navermaps = window.naver.maps;
    return (
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '540px', // 네이버지도 가로 길이
          height: '380px', // 네이버지도 세로 길이
          margin: '0 auto'
        }}
        defaultCenter={{ lat: 37.5198162, lng: 126.940050 }} // 지도 초기 위치
        defaultZoom={16} // 지도 초기 확대 배율
      ><Marker
      key={1}
      position={new navermaps.LatLng(37.5198162, 126.940050)}
      //animation={2}
      icon='워킹온더클라우드'
    />
  </NaverMap>
    );
  }
  export default NaverMapAPI;