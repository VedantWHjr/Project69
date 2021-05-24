import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={this.getCameraPermissions}
      style={styles.container}
      title= "barcode scanner">
        <Text style={styles.container}>Scan QR Code</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
