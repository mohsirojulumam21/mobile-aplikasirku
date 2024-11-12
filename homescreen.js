import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Apple', price: 2000 },
  { id: 2, name: 'Banana', price: 1500 },
  // ...
];

const HomeScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={handleAddToCart} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;