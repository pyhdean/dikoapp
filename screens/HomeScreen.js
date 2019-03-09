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


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
    headerTintColor: WHITE_COLOR,
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      fontSize: 80,
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    let me = this;
    getNews().then((res)=>{
      me.setState({
        news:  NewsItem.createNewsItems(JSON.parse(res['_bodyText']).values)
      });
    });
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    dataSource = ds.cloneWithRows(this.state.news);
    //TODO do a loading thing when fetching data
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.diakoniaLogo}
              resizeMode='contain'
              source={require('../assets/images/diakonia_logo.png')}
            />
            <Text style={styles.diakoniaLogoText}>
              센디에고 소망교회 청년부
            </Text>
          </View>
          <View style={styles.newsSection}>
            <View style={styles.newsSectionHeader}>
              <Text style={styles.newsSectionHeaderText}> 교회 소식 </Text>
            </View>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) => {
                return (
                  <Row
                    title={rowData.title}
                    body={rowData.body}
                    titleStyle={styles.newsTitleText}
                    bodyStyle={styles.newsBodyText}
                  />
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const LOGO_ACTUAL_WIDTH = 2645;
const LOGO_ACTUAL_HEIGHT =  456;
const LOGO_X_MARGIN = 60;
const windowWidth = Dimensions.get('window').width;
const logoWidth = windowWidth - ( 2 * LOGO_X_MARGIN);
const logoHeight = logoWidth * LOGO_ACTUAL_HEIGHT/LOGO_ACTUAL_WIDTH;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_BG_COLOR,
  },
  logoContainer: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 32,
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
  },
  diakoniaLogo: {
    flex: 1,
    marginLeft: LOGO_X_MARGIN,
    marginRight: LOGO_X_MARGIN,
    width: logoWidth,
    height: logoHeight,
  },
  diakoniaLogoText: {
    flex: 1,
    fontSize: 11,
    color: MUTED_TEXT_COLOR,
  },
  newsSection: {
    marginTop: 15,
    backgroundColor: WHITE_COLOR,
  },
  newsSectionHeader: {
    color: PRIMARY_COLOR,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 8,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  newsSectionHeaderText: {
    color: PRIMARY_COLOR,
    fontSize: 15,
    fontWeight: 'bold'
  },
  newsTitleText: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  newsBodyText: {
    color: MUTED_TEXT_COLOR
  },
  newsRow: {
    paddingTop: 5,
    paddingBottom: 5,
  }
});
