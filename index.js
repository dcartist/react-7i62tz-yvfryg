import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Select } from 'antd';

class Demo extends React.Component {
  formRef = React.createRef();

  render() {
    return (
      <Form 
        ref={this.formRef} 
        name="control-ref" 
        onFieldsChange={(e) => console.log('form on change', e)}
      >
        <Button 
          onClick={() => this.formRef.current.validateFields().then(console.log)}
          >
          Run Validation
        </Button>
        <Form.Item
          name="note"
          label="Note"
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));