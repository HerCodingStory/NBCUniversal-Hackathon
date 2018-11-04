import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class ShowScreen extends Component {
  static navigationOptions = {
    title: 'Shows',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Shows</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default ShowScreen;
