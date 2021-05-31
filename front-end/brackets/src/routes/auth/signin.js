import React,{useState} from 'react';
import {Button,Modal,Form, Input,Alert} from 'antd';
import axios from 'axios';

export default function SignIn(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');

    const body={
        email : email,
        password:password
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };

      const handleSubmit=e=>{
          e.preventDefault();
          axios.post('http://localhost:3003/api/v1/auth/login',body)
          .then(res=>{
              if(res.status===201) {
                localStorage.setItem('user',res.data._id);
                window.location.reload();
              }
              else {
                <Alert message="Please enter a valid Email and Password" type="error" />
              }
          })
          .catch(err=>{
              console.log(err);
          });
      }


    return(
        <>
        <Button ghost onClick={showModal}>
          SignIn
        </Button>
        <Modal title="Login in your account" visible={isModalVisible}
        footer={
            <Form.Item {...tailLayout}>
            <Button type="primary" onClick={e=>handleSubmit(e)}>Submit</Button>
          </Form.Item>
        } closable
        onOk={handleOk} onCancel={handleCancel}
        >
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type:'email',
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input onChange={event=> setEmail(event.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={event=> setPassword(event.target.value)}/>
      </Form.Item>

      
    </Form>
        </Modal>
      </>
    )
}