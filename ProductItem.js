import React from 'react';
import { Button, Text, View } from 'react-native';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View>
      <Text>{product.name} - Rp {product.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
    </View>
  );
};

export default ProductItem;