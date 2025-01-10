import './App.css';
import {Space} from "antd";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";

function App() {
  return (
    <div className="App">
    <AppHeader/>
    <Space className='ContentAndMenu'> 
      <SideMenu/>
      <PageContent/>
    </Space>
    <AppFooter/>
    </div>
  );
}

export default App;
