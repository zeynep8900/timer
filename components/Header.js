import * as React from 'react';
import { Appbar } from 'react-native-paper';


const MyHeader = () => {

  return (
    <Appbar.Header style={{backgroundColor:'black'}}>
      <Appbar.Content title="Timer" style={{ alignItems: 'center'}}/>
    </Appbar.Header>
  );
};

export default MyHeader;