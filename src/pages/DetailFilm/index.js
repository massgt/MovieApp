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
import IconStar from 'react-native-vector-icons/FontAwesome';
import IconLike from 'react-native-vector-icons/AntDesign';

class DetailFilm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <IconBack name={'chevron-back'} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Detail</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.title}>Sons Of Anarchy</Text>
            <Text style={styles.year}>2016 | 1h 24m</Text>
            <Image
              source={{
                uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5878d712181073.5625876ee112b.jpg',
              }}
              style={styles.posterFilm}
            />

            <View style={styles.genreContainer}>
              <Text style={styles.genreText}>Action</Text>
              <Text style={styles.genreText}>Advanture</Text>
            </View>
            <Text style={styles.synopsis}>
              A man in his early 30s tries to find a balance in his life between
              being a new father and his involvement in a motorcycle gang.
            </Text>

            <View style={styles.statistic}>
              <IconStar name={'star'} size={18} color={'gold'} />
              <Text style={styles.textRating}>8.5</Text>
              <Text style={styles.textRating2}>/10 | </Text>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <IconLike name={'like1'} size={18} color={'grey'} />
                <Text style={styles.textRating2}> Like</Text>
              </TouchableOpacity>
              <Text style={styles.textRating2}> - 350K</Text>
              <Text style={styles.textRating2}> | </Text>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => this.props.navigation.navigate('Rate')}>
                <IconStar name={'star'} size={18} color={'grey'} />
                <Text style={styles.textRating2}> Rate</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.line} />
            <Text style={styles.textDirector}>Director</Text>
            <Text style={styles.castName}>Kurt Sutter</Text>
            <View style={styles.line} />
            <View style={styles.castContainer}>
              <Text style={styles.textDirector}>Cast</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ListActor')}>
                <IconBack name={'chevron-forward'} style={styles.iconCast} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DetailActor')}>
              <Text style={styles.castName}>- Charlie Hunnam</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.castName}>- Ron Perlman</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.castName}>- Maggie Siff</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DetailFilm;

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
  title: {
    fontSize: 30,
    color: 'white',
  },
  year: {
    fontSize: 17,
    color: 'grey',
  },
  posterFilm: {
    width: 175,
    height: 250,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  synopsis: {
    fontSize: 15,
    color: 'white',
  },
  genreContainer: {
    flexDirection: 'row',
  },
  genreText: {
    color: 'white',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#cacaca',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  statistic: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textRating: {
    fontSize: 15,
    paddingLeft: 5,
    color: 'white',
  },
  textRating2: {
    fontSize: 15,
    color: 'grey',
  },
  line: {
    borderColor: '#444444',
    borderWidth: 0.5,
    marginVertical: 10,
  },
  textDirector: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  castContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCast: {
    color: 'white',
    fontSize: 16,
  },
  castName: {
    fontSize: 15,
    color: '#3d85c6',
  },
});
