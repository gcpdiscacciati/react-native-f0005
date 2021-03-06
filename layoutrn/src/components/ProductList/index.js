/* eslint-disable no-sparse-arrays */
import React, {Component} from 'react';

import {View} from 'react-native';
import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image:
          'https://santascarpa.com.br/wp-content/uploads/2019/04/PEEP-TOE-SANTA-SCARPA-SS36-PRETO-COLECAO-2019-3-1.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 2,
        image:
          'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 3,
        image:
          'https://santascarpa.com.br/wp-content/uploads/2019/04/PEEP-TOE-SANTA-SCARPA-SS36-PRETO-COLECAO-2019-3-1.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$30,00',
      },
      {
        id: 4,
        image:
          'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 5,
        image:
          'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 6,
        image:
          'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      ,
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </View>
    );
  }
}
