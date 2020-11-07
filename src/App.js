import React, { Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/hooks/authContext'
import { Login, Main } from '@/screens'
import { Route } from '@/components'
import { GlobalStyle, PageLoader } from '@/style-guide'

import 'react-toastify/dist/ReactToastify.css'

const queryCache = new QueryCache()

const App = () => (
  <>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>
        <Suspense fallback={<PageLoader />}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Main} isPrivate />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </AuthProvider>
    </ReactQueryCacheProvider>
  </>
)

export default App
