import React from 'react'
import ReactDOM from 'react-dom'
import { Modal } from './style-guide'

import App from './App'

Modal.setAppElement('#modal-root')
ReactDOM.render(<App />, document.getElementById('root'))
