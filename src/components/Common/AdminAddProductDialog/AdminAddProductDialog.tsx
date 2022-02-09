import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToGrocery } from "redux/actionCreators/groceryItem";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

interface IProps{
  handleSubmit:()=>void
}

const AdminAddProductDialog = ({handleSubmit}:IProps) => {
  const dispatch =useDispatch()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [image, setImage] = useState<null | string>(null);
  const [loader,setLoader]=useState<boolean | null>(null);

  console.log('show',loader);
  
  const handleUploadImage = (e: any) => {
    
    setLoader(true)
    console.log(e.target.files);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append("upload_preset", "grocery");
    axios
      .post(`https://api.cloudinary.com/v1_1/dzghsspe7/image/upload`, formData)
      .then((res) =>{
        setImage(res.data.url)
        setLoader(false)
      });
  };

  const onFinish = (values: any) => {
    console.log(values);
    const count = 1;
    const groceryItem = { ...values, image, count };
    dispatch(addToGrocery(groceryItem))
    setShow(false);
    handleSubmit()
  

  };
  return (
    <>
      <div className="text-center pb-5">
        <Button onClick={()=>setShow(true)} >Add Grocery</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            {
              loader && <Spinner animation="border" />
            }
          </Modal.Header>
          <Modal.Body style={{ width: "75%" }}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleUploadImage}
              />

              <Form.Item
                name={["name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["price"]}
                label="Price"
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["quantity"]}
                label="Quantity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["discount"]}
                label="discount"
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default AdminAddProductDialog;
