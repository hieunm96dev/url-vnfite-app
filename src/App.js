import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import './App.css';
import Logo from "./Logo.jpg";



const PLAY_STORE_LINK = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.vnfite.vnfiteapp";
const APP_STORE_LINK = "https://apps.apple.com/vn/app/vnfite-fintech-p2p-lending/id1610082008?l=vi"
function App() {
  React.useEffect(() => {
    if (isAndroid) {
      window.location.href =
        PLAY_STORE_LINK;
    } else if (isIOS) {
      window.location.href =
        APP_STORE_LINK;
    } else {
      window.location.href =
        "http://vnfite.com.vn/";
    }
  }, []);

  return (
    <div className="App">
      <img src={Logo} alt='Logo' />
    </div>
  );
}

export default App;
