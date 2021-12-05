import React, {Component} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons';

class ListActor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <IconBack name={'chevron-back'} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Cast</Text>
        </View>

        <ScrollView style={styles.content}>
          <TouchableOpacity
            style={styles.castList}
            onPress={() => this.props.navigation.navigate('DetailActor')}>
            <Image
              source={{
                uri: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRMWlFuQorqOUG5WMgq633NsGclEkIM7DUH9WL5yzuorgkVZM8cTLNU9R0bfQr5',
              }}
              style={styles.castPic}
            />
            <Text style={styles.castName}>Charlie Hunnam</Text>
          </TouchableOpacity>
          <View style={styles.line} />
        </ScrollView>
      </View>
    );
  }
}

export default ListActor;

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
  castList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  castPic: {
    height: 130,
    width: 90,
  },
  castName: {
    fontSize: 19,
    color: 'white',
    paddingLeft: 15,
  },
  line: {
    borderColor: '#444444',
    borderWidth: 0.5,
    marginVertical: 15,
  },
});
