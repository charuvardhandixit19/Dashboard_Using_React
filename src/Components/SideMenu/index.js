import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined,UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function SideMenu(){
    const navigate=useNavigate();
    return (<div className="SideMenu">
        <Menu 
        onClick={(item)=>{
            navigate(item.key);
        }
        }
        items={
            [
                {
                    label:"Dashboard",
                    icon:<AppstoreOutlined
                      style={{
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)",
                        borderRadius:20,
                        padding:8,
                        fontSize:24,
                      }} />,
                    key:"/"
                },
                {
                    label:"Inventory",
                    icon:<ShopOutlined
                    style={{
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)",
                        borderRadius:20,
                        padding:8,
                        fontSize:24,
                      }}/>,
                    key:"/inventry"
                },
                {
                    label:"Orders",
                    icon:<ShoppingCartOutlined
                    style={{
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)",
                        borderRadius:20,
                        padding:8,
                        fontSize:24,
                      }}/>,
                    key:"/orders"
                },
                {
                    label:"Customers",
                    key:"/customers",
                    icon:<UserOutlined 
                    style={{
                        color:"green",
                        backgroundColor:"rgba(0,255,0,0.25)",
                        borderRadius:20,
                        padding:8,
                        fontSize:24,
                      }}/>
                }
            ]
        }>

        </Menu>
        </div>);
}
export default SideMenu;