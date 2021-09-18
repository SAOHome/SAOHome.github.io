import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import 'tailwindcss/tailwind.css'

import AppContent from '@containers/AppContent'
import configureStore from '@redux-folder/configureStore'
const { store } = configureStore()

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Provider store={store}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <AppContent>
        <Component {...pageProps} />
      </AppContent>
    </Provider>
  )
}

export default MyApp
