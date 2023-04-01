import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ // Folha de estilo
  button: {
    marginBottom: 100,
    color: 'black',
    backgroundColor: 'black',
    padding: 40,
    borderRadius: 5
  },
  number: {
    fontSize: 50,
    fontFamily: 'Times New Roman',
  }
});

class RandomNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
  }

  calcular = () => {
    const min = 20; // valor mínimo
    const max = 40; // valor máximo
    const numbers = [];

    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
    }

    this.setState({ numbers });
  }

  render() {
    return (
      <View>
        <Button title="Gerar números" onPress={this.calcular} style={styles.button} />
        {this.state.numbers.map((number, index) => (
          <Text key={index} style={styles.number}>{number}</Text>
        ))}
      </View>
    );
  }
}

export default RandomNumbers;