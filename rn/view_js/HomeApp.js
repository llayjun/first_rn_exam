'use strict'
import React from 'react';// 各种包一定要注意导入
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {
    ScrollView,
    Dimensions,
    Text,
    Image,
    View,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    RefreshControl,
    FlatList,
    SectionList,
} from 'react-native';
import NaviBar from 'react-native-pure-navigation-bar';

import VideoList from './VideoList';
import NewCourse from "./NewCourse";
import TestQuestion from "./TestQuestion";
import EnterKnowledge from "./EnterKnowledge";

//获取宽
const SCREEN_WIDTH = Dimensions.get('window').width;
const VIDEO_ITEM_MARGIN = 5;
var VideoDataBase = [
    {
        key: 'a',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    },
    {
        key: 'b',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    },
    {
        key: 'c',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    },
    {
        key: 'd',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    },
    {
        key: 'e',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    },
    {
        key: 'f',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    },
]

var ClassDataBase = [
    {
        key: 'a',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'b',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'c',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'd',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'e',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'f',
        keyName: 'Bananavarieties',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
]

class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {

        // 定义网络图片地址
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

        const {navigate} = this.props.navigation;

        return (

            <ScrollView>
                <View style={{
                    flex: 1, backgroundColor: '#f6f6f6'
                }}>

                    <NaviBar title={'安全培训'} rightElement={'搜索'}/>

                    {/*顶部图片*/}
                    <Image source={require('../img/home_top.jpg')} style={{width: '100%', height: 130}}/>

                    {/*顶部四个按钮*/}
                    {/*尝试把`flexDirection`改为`column`看看*/}
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.topfourview}>
                            <TouchableOpacity onPress={() => navigate('VideoList')}>
                                <Image source={require('../img/ic_video.jpg')}
                                       style={{width: 30, height: 30}}/>
                                <Text style={styles.toptext}>视频</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topfourview}>
                            <TouchableOpacity onPress={() => navigate('NewCourse')}>
                                <Image source={require('../img/ic_video.jpg')}
                                       style={{width: 30, height: 30}}/>
                                <Text style={styles.toptext}>课题</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topfourview}>
                            <TouchableOpacity onPress={() => navigate('TestQuestion')}>
                                <Image source={require('../img/ic_video.jpg')}
                                       style={{width: 30, height: 30}}/>
                                <Text style={styles.toptext}>试题</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.topfourview}>
                            <TouchableOpacity onPress={() => navigate('EnterKnowledge')}>
                                <Image source={require('../img/ic_video.jpg')}
                                       style={{width: 30, height: 30}}/>
                                <Text style={styles.toptext}>案例</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/*视屏部分*/}
                    <View
                        style={{
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            margin: 10,
                        }}>
                        <Text style={{flex: 1, color: 'black', fontWeight: 'bold', fontSize: 15}}>热门视频</Text>
                        <Text
                            style={{color: 'gray', fontSize: 12, textAlign: 'center'}}
                            onPress={() => navigate('VideoList')}>更多</Text>
                    </View>
                    <View style={{marginLeft: VIDEO_ITEM_MARGIN, marginRight: VIDEO_ITEM_MARGIN}}>
                        <VideoFlatList/>
                    </View>


                    {/*最新课件部分*/}
                    <View
                        style={{
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            margin: 10,
                        }}>
                        <Text style={{flex: 1, color: 'black', fontWeight: 'bold', fontSize: 15}}>最新课件</Text>
                        <Text
                            style={{color: 'gray', fontSize: 12, textAlign: 'center'}}
                            onPress={() => navigate('NewCourse')}>更多</Text>
                    </View>
                    <View style={{
                        marginStart: VIDEO_ITEM_MARGIN * 2, marginEnd: VIDEO_ITEM_MARGIN * 2, marginBottom: 50
                    }}>
                        <ClassFlatList/>
                    </View>

                </View>
            </ScrollView>);

    }
}

/**
 * 视频列表
 */
class VideoFlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <View>
                <FlatList
                    numColumns={2}
                    data={VideoDataBase}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                        />
                    }
                />
            </View>
        );
    }

    _keyExtractor = (item, index) => item.key;

    renderItem({item, index}) {
        return (
            <TouchableOpacity key={index} activeOpacity={1}
                              onPress={this.clickItem.bind(this, item, index)}>
                <View style={{
                    margin: VIDEO_ITEM_MARGIN,
                    width: ('SCREEN_WIDTH' - 6 * VIDEO_ITEM_MARGIN) / 2,
                    backgroundColor: 'white',
                }}>
                    <Image style={{
                        width: (SCREEN_WIDTH - 6 * VIDEO_ITEM_MARGIN) / 2,
                        height: 150,
                        resizeMode: 'cover'
                    }} source={{uri: item.imageUri}}>
                    </Image>
                    <Text style={styles.video_content_text}>{item.keyName}</Text>
                    <Text style={styles.video_times_text}>{item.times}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem(item, index) {
        // alert(index)
    }

}

/**
 * 课件列表
 */
class ClassFlatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <View>
                <FlatList
                    data={ClassDataBase}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                        />
                    }
                />
            </View>
        );
    }

    renderItem({item, index}) {

        return (
            <TouchableOpacity key={index} activeOpacity={1}
                              onPress={this.clickItem(this, item, index)}>
                <View style={{
                    width: "100%",
                    height: 60,
                    marginTop: 1,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    padding: VIDEO_ITEM_MARGIN,
                    boxSizing: 'border-box'
                }}>
                    <Image style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'cover'
                    }} source={require('../img/ic_pdf.jpg')}>
                    </Image>
                    <View style={{flex: 1}}>
                        <Text style={styles.pdf_content_text}>{item.keyName}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.pdf_times_text}>{item.time}</Text>
                            <Text style={styles.pdf_times_text}>{item.times}</Text>
                            <Text style={styles.pdf_size_text}>{item.size}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem(item, index) {

    }

}

const styles = StyleSheet.create({
    topfourview: {
        width: '25%',
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toptext: {
        color: 'black',
        fontSize: 13,
    },
    video_content_text: {
        color: 'black',
        fontSize: 14,
        textAlign: 'right',
        marginRight: 5
    },
    video_times_text: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'right',
        margin: 5
    },
    pdf_content_text: {
        color: 'black',
        fontSize: 14,
        marginLeft: 5
    },
    pdf_times_text: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 5
    },
    pdf_size_text: {
        color: 'gray',
        fontSize: 12,
    }
})

const HomeApp = createStackNavigator({
    Home: {screen: HomeScreen},//先进入Home类
    VideoList: {screen: VideoList},//视屏列表
    NewCourse: {screen: NewCourse},//最新课件列表
    TestQuestion: {screen: TestQuestion},//试题列表
    EnterKnowledge: {screen: EnterKnowledge},//进场须知
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null
    }
});

export default createAppContainer(HomeApp);

