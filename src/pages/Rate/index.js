import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';
import IconClose from 'react-native-vector-icons/AntDesign';

class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DetailFilm')}>
          <IconClose name={'close'} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Rate This Film</Text>
        <View style={styles.starContainer}>
          <StarRating
            disabled={false}
            maxStars={10}
            rating={this.state.starCount}
            fullStarColor={'gold'}
            starSize={30}
            selectedStar={rating => this.onStarRatingPress(rating)}
          />
        </View>
      </View>
    );
  }
}

export default Rate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  closeIcon: {
    fontSize: 27,
    color: 'white',
    padding: 10,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    marginTop: 30,
  },
  starContainer: {
    paddingHorizontal: 20,
    marginVertical: 25,
  },
});
