import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PractiseDiaries from './sub-contents/practise-diaries'
import Followees from './sub-contents/followees'
import ExcellentDiaries from './sub-contents/excellent-diaries'

class ContentRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={PractiseDiaries} />
				<Route path="/practise-diaries" component={PractiseDiaries} />
				<Route path="/followees" component={Followees} />
				<Route path="/excellent-diaries" component={ExcellentDiaries} />
			</Switch>
		)
	}
}

export default ContentRouter
