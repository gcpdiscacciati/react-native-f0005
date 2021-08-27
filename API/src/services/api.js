import {AsyncStorage} from 'react-native';
import {create} from 'apisauce';

//Testando com o Android, foi necessário trocar o localhost pelo IP da máquina
const api = create({
  baseURL: 'http://192.168.0.103:3000',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

api.addResponseTransform(response => {
  if (!response.ok) {
    throw response;
  }
});

export default api;
