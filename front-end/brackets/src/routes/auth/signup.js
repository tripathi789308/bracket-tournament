import React,{useState} from 'react';
import {Button,Modal,Form, Input,Alert} from 'antd';
import axios from 'axios';


export default function SignUp(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');

    const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');

    const [country,setCountry]=useState('');

    const body = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        country:country
    }

    const handleSubmit=e=>{
        e.preventDefault();
        axios.post('http://localhost:3003/api/v1/auth/register',body)
        .then(res=>{
            if(res.status===201) {
                <Alert message="Success Text" type="success" />
            }
            else {
              <Alert message="Something went Wrong,try again later" type="error" />
            }
        })
        .catch(err=>{
            console.log(err);
        })
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

    return(
        <>
        <Button ghost onClick={showModal} style={{marginLeft:"5px"}}>
          SignUp
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible}  
         footer={
            <Form.Item {...tailLayout}>
            <Button type="primary" onClick={e=>handleSubmit(e)} >Submit</Button>
          </Form.Item>
        }
        closable onOk={handleOk} onCancel={handleCancel} >
            <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your first name',
                    },
                    ]}
                >
                    <Input  onChange={event=> setFirstName(event.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Last name',
                    },
                    ]}
                >
                    <Input onChange={event=> setLastName(event.target.value)}/>
                </Form.Item>

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

                <Form.Item
                    label="Country"
                    name="country"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Country',
                    },
                    ]}
                >
                    <Input onChange={event=> setCountry(event.target.value)}/>
                </Form.Item>
                </Form>      
        </Modal>
      </>
    )
}