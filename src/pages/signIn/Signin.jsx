import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [loginform] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.authSlice);

  const handleLoginSubmit = async () => {
    await loginform.validateFields();
    const values = loginform.getFieldsValue();

    dispatch(postLogin(values))
      .unwrap()
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((err) => message.error(err));
  };

  return (
    <div className="sign-in">
      <div className="sign-in_content">
        <h3>Welcome to our shop</h3>
        <Form
          form={loginform}
          validateTrigger="onBlur"
          style={{ width: "100%" }}
        >
          <Form.Item
            name="email"
            label={"Email"}
            labelAlign="left"
            labelCol={{ xs: 8, md: 6 }}
            wrapperCol={{ xs: 16, md: 24 }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="large" type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label={"Password"}
            labelAlign="left"
            labelCol={{ xs: 8, md: 6 }}
            wrapperCol={{ xs: 16, md: 24 }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password autoComplete="current-password" size="large" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            onClick={handleLoginSubmit}
            size="large"
          >
            Daxil ol
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
