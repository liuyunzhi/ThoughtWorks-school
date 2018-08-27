import React from 'react';
import { Card, Form, DatePicker, Input, Button, Row, Col } from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { TextArea } = Input;
const NewLog = () => {
    return (
        <Card title="新的日志"
            extra={<a href="#">如何写一篇优秀的成长日志</a>} >
            <Form>
                <Form.Item >
                    日期
                    <DatePicker onChange={onChange} />
                </Form.Item>
                <Form.Item >
                    总结内容
                    <TextArea rows={5}>## 我做了什么
                        ## 学了什么
                        ## 有什么印象深刻的收获
                    </TextArea>
                </Form.Item>
                <Row gutter={24} type="flex" justify="end">
                    <Col >
                        <Button type="primary" ghost>提交</Button>
                    </Col>
                    <Col>
                        <Button>取消</Button>
                    </Col>
                </Row>
            </Form>
        </Card >
    );
}

export default NewLog;