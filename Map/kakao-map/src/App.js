import './App.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function App() {

  const KakaoMap = () => {
    return (
      <Map
        center={{ lat: 37.49100953576117 , lng: 126.72047625631083 }}
        style={{ width: "100%", height: "400px" }}
      >
        <MapMarker position={{ lat: 37.49100953576117 , lng: 126.72047625631083 }}>
          <div className='marker'>
            <span className='title'>부평 더조은아카데미👩‍💻</span>
          </div>
        </MapMarker>
      </Map>
    )
  }


  return (
    <div className='container'>
      <h1>KakaoMap</h1>
      <KakaoMap />
    </div>
  );
}

export default App;
