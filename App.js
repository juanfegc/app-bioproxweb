import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <NativeBaseProvider>
      <WebView
        source={{uri: 'https://bioprox.es/'}}
        style={{backgroundColor: '#F9B41E'}}
      />
    </NativeBaseProvider>
  );
};

export default App;
