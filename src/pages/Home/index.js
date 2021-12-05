import React, {Component} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  headerShown = false;

  render() {
    // console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Movie App</Text>
        </View>
        <ScrollView>
          <View style={styles.cardContainer}>
            {/* Card */}
            <TouchableOpacity
              style={styles.boxCard}
              onPress={() => this.props.navigation.navigate('DetailFilm')}>
              <Image
                source={{
                  uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5878d712181073.5625876ee112b.jpg',
                }}
                style={styles.posterFilm}
              />
              <View style={styles.rating}>
                <Icon name={'star'} size={18} color={'gold'} />
                <Text style={styles.textRating}>8.5</Text>
              </View>
              <Text style={styles.movieTitle}>Sons of Anarchy</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  header: {
    height: 55,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingLeft: 10,
    elevation: 10,
    marginBottom: 10,
  },
  textHeader: {
    color: '#e91e63',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
  },
  boxCard: {
    backgroundColor: '#262626',
    width: '45%',
    height: 290,
    margin: 6,
    paddingBottom: 5,
    borderRadius: 5,
  },
  posterFilm: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 5,
    backgroundColor: 'grey',
  },
  rating: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  textRating: {
    fontSize: 16,
    paddingLeft: 5,
    color: 'white',
  },
  movieTitle: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 5,
  },
});
