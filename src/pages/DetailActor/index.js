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
import IconBack from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

class DetailActor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ListActor')}>
            <IconBack name={'chevron-back'} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Detail Cast</Text>
        </View>

        <ScrollView style={styles.content}>
          <Text style={styles.name}>Charlie Hunnam</Text>
          <Image
            source={{
              uri: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRMWlFuQorqOUG5WMgq633NsGclEkIM7DUH9WL5yzuorgkVZM8cTLNU9R0bfQr5',
            }}
            style={styles.picBio}
          />
          <Text style={styles.textBio}>
            Matthew Charles "Charlie" Hunnam (born 10 April 1980) is an actor of
            origin England. He is known for his role as Nathan Maloney in the
            drama Channel 4, Queer as Folk, Lloyd Haythe in a comedy series Fox,
            Undeclared, Pete Dunham in the movie Green Street , Jackson "Jax"
            Teller in the series FX, Sons of Anarchy, and Raleigh Becket in the
            film Pacific Rims.
          </Text>

          <Text style={styles.filmography}>Filmography</Text>
          <TouchableOpacity
            style={styles.boxCard}
            onPress={() => this.props.navigation.navigate('Home')}>
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
        </ScrollView>
      </View>
    );
  }
}

export default DetailActor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  header: {
    height: 55,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingLeft: 5,
    elevation: 10,
    // marginBottom: 10,
    flexDirection: 'row',
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  iconBack: {
    color: 'white',
    fontSize: 27,
    paddingRight: 10,
  },
  content: {
    margin: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 25,
    color: 'white',
  },
  textBio: {
    color: 'grey',
    fontSize: 14,
  },
  picBio: {
    width: 150,
    height: 250,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  filmography: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    borderLeftWidth: 4,
    borderColor: '#e91e63',
    paddingLeft: 13,
    marginVertical: 10,
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
