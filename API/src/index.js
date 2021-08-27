import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';

import api from './services/api';

export default class App extends Component {
  state = {
    loggedInUser: null,
    errorMessage: null,
    projects: [],
  };

  signIn = async () => {
    try {
      const response = await api.post('/auth/authenticate', {
        email: 'diego@rocketseat.com.br',
        password: '123456',
      });

      const {user, token} = response.data;

      //AsyncStorage foi depreciado, mas continua funcionando em 19/08/2021
      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.setState({loggedInUser: user});

      Alert.alert('Login com sucesso!');
    } catch (err) {
      this.setState({errorMessage: err.data.error});
    }
  };

  getProjectList = async () => {
    try {
      const response = await api.get('/projects');

      const {projects} = response.data;

      this.setState({projects});
    } catch (response) {
      this.setState({errorMessage: response.data.error});
    }
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = await JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));

    if (token && user) {
      this.setState({loggedInUser: user});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.loggedInUser && (
          <Text>{this.state.loggedInUser.name}</Text>
        )}
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}

        {this.state.loggedInUser ? (
          <Button onPress={this.getProjectList} title="Carregar" />
        ) : (
          <Button onPress={this.signIn} title="Entrar" />
        )}

        {this.state.projects.map(project => (
          <View key={project._id} style={{marginTop: 15}}>
            <Text style={{fontWeight: 'bold'}}>{project.title}</Text>
            <Text>{project.description}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
