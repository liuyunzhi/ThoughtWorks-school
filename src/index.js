import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
