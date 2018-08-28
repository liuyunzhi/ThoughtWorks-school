import React, { Component } from 'react';
import { Layout } from 'antd';
import PractiseDiaries from './contents/PractiseDiaries'
import Followees from './contents/Followees'
import ExcellentDiaries from './contents/ExcellentDiaries'
import { Route } from 'react-router-dom';

const { Content } = Layout;

class ContentRouter extends Component {
    render() {
        return (
            <Content>
                <Route exact path="/practise-diaries" component={PractiseDiaries} />
                <Route path="/followees" component={Followees} />
                <Route path="/excellent-diaries" component={ExcellentDiaries} />
            </Content>
        );
    }
}

export default ContentRouter;
