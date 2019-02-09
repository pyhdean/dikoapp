import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  ListView,
  Text
} from 'react-native';
import Row from '../components/news/Row';
import { getNews } from '../api/new';

class NewsItem {
  static createNewsItems(news) {
    return news.map((newsItem, index)=>{
      return new NewsItem(newsItem[0], newsItem[1])
    });
  }

  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

// TODO move colors to their own file
const PRIMARY_COLOR = '#007762';
const APP_BG_COLOR = '#eee';
const BORDER_COLOR = '#aaa';
const MUTED_TEXT_COLOR = '#777';
const WHITE_COLOR = '#fff'


export default class PrayerScreen extends React.Component {
  static navigationOptions = {
    title: '기도',
    headerTintColor: WHITE_COLOR,
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      fontSize: 80,
    }
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>some text is here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BG_COLOR,
  },
});
