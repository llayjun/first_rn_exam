'use strict'
import React from 'react';// 各种包一定要注意导入
import {createAppContainer} from "react-navigation";
import {
    ScrollView,
    Dimensions,
    Text,
    Image,
    View,
    Modal,
    Button,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
    RefreshControl,
    FlatList,
    SectionList
} from 'react-native';
import NaviBar from 'react-native-pure-navigation-bar';

//获取宽
const SCREEN_WIDTH = Dimensions.get('window').width;
const MARGIN_5 = 5;
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

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

class EnterKnowledgeScreen extends React.Component {

    componentDidMount(): void {

    }

    render() {

        // 定义网络图片地址
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

        return (
            <ScrollView>
                <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>

                    {this.renderNavBar()}

                    {this._renderTop()}

                    {this._renderCenterVideo()}

                    {this._renderBottomVideo()}
                </View>
            </ScrollView>
        )
    }

    renderNavBar() {
        return (
            <NaviBar title={'进场须知'} hasSeperatorLine={true}/>
        )
    }

    _renderCenterVideo() {
        return (
            <View style={{marginTop: MARGIN_5 * 2, backgroundColor: 'white', padding: MARGIN_5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../img/ic_collection.png')} style={{width: 15, height: 15}}/>
                    <Text style={{flex: 1, color: 'black', fontWeight: 'bold', fontSize: 13}}>为您推荐</Text>
                </View>
                <RecommendVideoFlatList/>
            </View>
        )
    }

    _renderBottomVideo() {
        return (
            <View style={{marginTop: MARGIN_5 * 2, backgroundColor: 'white', padding: MARGIN_5}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../img/ic_collection.png')} style={{width: 15, height: 15}}/>
                    <Text style={{flex: 1, color: 'black', fontWeight: 'bold', fontSize: 13}}>最新视屏</Text>
                </View>
                <NewVideoFlatList/>
            </View>
        )
    }

    _renderTop() {
        return (
            <View>
                {/*顶部图片*/}
                <Image source={require('../img/home_top.jpg')} style={{width: '100%', height: 130}}/>

                <View style={{
                    padding: MARGIN_5,
                    backgroundColor: 'white'
                }}>

                    <Text style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>进场须知标题标题限制</Text>

                    <View style={{
                        height: 30,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.small_gray_text}>2888次播放</Text>
                        <Text style={styles.small_gray_text}>2w人收藏</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../img/ic_collection.png')} style={{width: 15, height: 15}}/>
                            <Image source={require('../img/ic_collection.png')} style={{width: 15, height: 15}}/>
                        </View>
                    </View>

                    <Text style={[styles.small_gray_text, {color: 'black', lineHeight: 14}]}>打开finder 选择上方的菜单”前往”
                        按住 option
                        下拉的菜单会自动出现个资源库(library)的选项
                        或是打开前往 选择 指定某个文件夹(好像倒数第二个选项)摊开的输入框 输入你要找的目录 路径</Text>

                </View>
            </View>
        )

    }

}

/**
 * 推荐视频列表
 */
class RecommendVideoFlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <View>
                <FlatList
                    data={VideoDataBase}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
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
                    margin: MARGIN_5,
                    width: 100,
                    backgroundColor: 'white',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 100,
                        height: 50,
                        resizeMode: 'cover'
                    }} source={{uri: item.imageUri}}>
                    </Image>
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
 * 最新视频列表
 */
class NewVideoFlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <View>
                <FlatList
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
                    margin: MARGIN_5,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                }}>
                    <Image style={{
                        width: 100,
                        height: 50,
                        resizeMode: 'cover'
                    }} source={{uri: item.imageUri}}>
                    </Image>
                    <View>
                        <Text style={[styles.video_content_text, {margin: MARGIN_5}]}>{item.keyName}</Text>
                        <Text
                            style={[styles.video_times_text, {textAlign: 'left', margin: MARGIN_5}]}>{item.times}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem(item, index) {
        // alert(index)
    }

}

const styles = StyleSheet.create({
    small_gray_text: {
        fontSize: 11,
        color: 'gray'
    }, video_content_text: {
        color: 'black',
        fontSize: 14,
        textAlign: 'right',
        marginRight: 5
    },
    video_times_text: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'right',
    },
})


export default createAppContainer(EnterKnowledgeScreen);