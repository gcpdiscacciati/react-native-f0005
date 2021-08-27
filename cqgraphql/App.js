//Plataforma GraphCool foi descontinuada, código não está funcionando como deveria

import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';

//import apolloClient from './services/apollo';

//import TodoList from './src/components/TodoList';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Plataforma GraphCool</Text>
        <Text style={styles.sectionTitle}>descontinuada</Text>
        <Text>Erro ao desenvolver app</Text>
      </View>
      //<ApolloProvider client={apolloClient}>
      //  <TodoList />
      //</ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
