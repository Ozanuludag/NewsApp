import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getArticles} from '../service/news';

const windowWidth = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    //return () => {}
    getArticles({category}).then(data => {
      setLoading(false);
      console.log(data);
      setData(data);
    });
  }, [category]);

  const renderData = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('News', {item})}>
        <View style={styles.container}>
          <View
            style={{
              marginBottom: 5,
              marginHorizontal: 10,
            }}>
            <View style={styles.contentWrapper}>
              <View style={{width: windowWidth / 2}}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Image
                style={styles.image}
                source={{
                  uri:
                    item.urlToImage != null
                      ? item.urlToImage
                      : 'https://image.shutterstock.com/image-illustration/graphical-modern-digital-world-news-600w-1254971608.jpg',
                }}
              />
            </View>
            <Text style={{marginLeft: 10, fontSize: 12}}>{item.source.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => {
                setCategory('general');
                category != 'general' ? setLoading(true) : null;
              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('technology');
                category != 'technology' ? setLoading(true) : null;
               
              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>Technology</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('business');
                category != 'business' ? setLoading(true) : null;

              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('entertainment');
                category != 'entertainment' ? setLoading(true) : null;
              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>Entertainment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('health');
                category != 'health' ? setLoading(true) : null;
              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>Health</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('science');
                category != 'science' ? setLoading(true) : null;
              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>Science</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('sports');
                category != 'sports' ? setLoading(true) : null;
              }}
              style={styles.cagetoryButton}>
              <Text style={styles.categoryButtonTitle}>Sports</Text>
            </TouchableOpacity>
          </ScrollView>
          <FlatList keyExtractor={({item,index}) => index} data={data} renderItem={renderData} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    //borderWidth: 1,
    padding: 10,
  },
  title: {
    width: windowWidth / 2,
  },
  image: {
    width: 100,
    height: 70,
    //borderWidth: 1,
    marginLeft: 10,
    borderRadius: 10,
  },
  cagetoryButton: {
    margin: 5,
    marginTop: 10,
    marginLeft: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  categoryButtonTitle: {
    padding: 5,
  },
});
