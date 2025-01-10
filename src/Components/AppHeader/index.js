import {Image, Typography,Space, Badge} from "antd";
import {BellFilled,MailOutlined} from "@ant-design/icons";
function AppHeader(){
    return <div className="AppHeader">
        <Image
        width={50}
        src="https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg"
        ></Image>
        <Typography.Title>Dashboard</Typography.Title>
        <Space>
            <Badge dot>

            <MailOutlined style={{fontSize:26}} />
            </Badge>
            <Badge count={1}>
            <BellFilled style={{fontSize:26}} />
            </Badge>
        </Space>
</div>
}
export default AppHeader;