import React, {Component} from 'react';
import {View} from 'react-native';

import {
  Container,
  TypeTitle,
  TypeDescrition,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';

import uberx from '../../assets/uberx.png';

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescrition>Viagens baratas para o dia-a-dia</TypeDescrition>

        <TypeImage source={uberx} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescrition>R$6,00</TypeDescrition>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
