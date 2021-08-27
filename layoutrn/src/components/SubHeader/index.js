import React from 'react';

import {View, Text, Image} from 'react-native';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const SubHeader = () => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHeyQRmwlNa0Q/profile-displayphoto-shrink_800_800/0/1542910934993?e=1634774400&v=beta&t=6AiQXn2ALbtDho4ApxFJpQyNCT14fyLrFnUDBG15lNM',
        }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Giovanne Discacciati</Text>
        <Text style={styles.bio}>
          Aluno de Tecnologia em Sistemas para Internet
        </Text>

        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Mensagem</Button>
          <Button type="outline">Seguir</Button>
        </View>
      </View>
    </View>
  </View>
);

export default SubHeader;
