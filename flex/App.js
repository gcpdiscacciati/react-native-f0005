import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>Voltar</Text>
      <Text>Titulo</Text>
      <Text>Perfil</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
  },

  header: {
    height: 60,
    backgroundColor: '#fff',
    //paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
