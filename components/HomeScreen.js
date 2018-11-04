import React, { Component } from 'react';
import {View} from 'react-native';
import {Button, Avatar, SocialIcon, Text, Badge, CheckBox} from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'NBSee',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <ImageSlider images={[
            'https://m.media-amazon.com/images/M/MV5BMmY4NjRmZDMtYmZjOS00OWI2LTlmMjktYjg3N2FiNzg4OTA1XkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_UY1200_CR91,0,630,1200_AL_.jpg',
            'https://cdn-static.sidereel.com/tv_shows/59590/huge_2x/311711-1.jpg',
            'https://www.2018auditions.com/wp-content/uploads/2013/09/NBC_TheVoice_logo__111201072504.jpg']}
        />

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

export default HomeScreen;
