import { LogoutOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Badge, Button, Layout, Tooltip, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";

const { Header } = Layout;

const DashboardHeader = () => {
  const { basket } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  const menuItems = [
    {
      key: "products",
      label: <Link to="/">Products</Link>,
    },
    {
      key: "basket",
      label: (
        <Link to="/basket">
          <Badge count={basket.length} size="small">
            <ShoppingOutlined style={{ fontSize: "18px" }} />
          </Badge>
        </Link>
      ),
    },
  ];

  return (
    <Header className="header">
      <Menu mode="horizontal" items={menuItems} />
      <Tooltip title="Logout">
        <Button type="text" onClick={handleLogout} icon={<LogoutOutlined />} />
      </Tooltip>
    </Header>
  );
};

export default DashboardHeader;
