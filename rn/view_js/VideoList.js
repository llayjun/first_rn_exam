'use strict'
import React from 'react';// 各种包一定要注意导入
import {createStackNavigator, createAppContainer} from 'react-navigation';
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

const CateData = require('../data/CategoryListData.json');//数据源

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

class VideoListScreen extends React.Component {

    constructor(props) {
        super(props);
        this._flatList = null
        this._sectionList = null
        this.state = {
            selectedRootCate: 0
        }
    }

    componentDidMount() {
        // 网络请求
    }

    render() {
        // 定义网络图片地址
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

        return (
            <ScrollView>
                <View style={{
                    flex: 1, backgroundColor: '#f6f6f6'
                }}>

                    {this.renderNavBar()}

                    {this.renderHeadTop()}

                    {this.renderCategory()}

                    {/*视屏部分*/}
                    <View style={{marginLeft: MARGIN_5, marginRight: MARGIN_5}}>
                        <VideoFlatList/>
                    </View>

                    <ModalExample/>

                </View>
            </ScrollView>
        );

    }

    renderNavBar() {
        return (
            <NaviBar title={'视频列表'} hasSeperatorLine={true}/>
        )
    }

    renderHeadTop() {

        const {navigate} = this.props.navigation;

        return (
            <View style={{
                flexDirection: 'row',
                height: 40,
                backgroundColor: 'white',
                alignItems: 'center',
                paddingLeft: MARGIN_5 * 2,
                paddingRight: MARGIN_5 * 2
            }}>
                <View>
                    <Text onPress={() => {
                        this.hotview.setNativeProps({
                            style: {
                                color: 'black',
                                fontSize: 15,
                            }
                        });
                        this.newview.setNativeProps({
                            style: {
                                color: 'gray',
                                fontSize: 14,
                            }
                        });
                        this.redhotview.setNativeProps({
                            style: {
                                height: 3
                            }
                        });
                        this.rednewview.setNativeProps({
                            style: {
                                height: 0
                            }
                        })
                    }} ref={component => this.hotview = component}
                          style={styles.choose_text}>热门</Text>

                    <Text ref={component => this.redhotview = component}
                          style={styles.red_item}/>

                </View>

                <View style={{marginLeft: MARGIN_5}}>
                    <Text onPress={() => {
                        this.newview.setNativeProps({
                            style: {
                                color: 'black',
                                fontSize: 15,
                            }
                        });
                        this.hotview.setNativeProps({
                            style: {
                                color: 'gray',
                                fontSize: 14,
                            }
                        });
                        this.rednewview.setNativeProps({
                            style: {
                                height: 3
                            }
                        })
                        this.redhotview.setNativeProps({
                            style: {
                                height: 0
                            }
                        });
                    }} ref={component => this.newview = component}
                          style={styles.un_choose_text}>最新</Text>

                    <Text ref={component => this.rednewview = component}
                          style={[styles.red_item, {height: 0}]}/>

                </View>

                <Text style={{
                    flex: 1,
                    textAlign: 'right',
                    color: 'gray',
                    fontSize: 14,
                }}>筛选</Text>

            </View>
        )
    }

    renderCategory() {
        return (
            <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#F5F5F5'}}>
                {this.renderRootCate()}
                {this.renderItemCate()}
            </View>
        )
    }

    renderRootCate() {
        let data = []
        CateData.data.map((item, index) => {
            data.push({key: index, title: item.firstCateName})
        })
        return (
            <View style={{backgroundColor: '#F5F5F5'}}>
                <FlatList
                    ref={flatList => this._flatList = flatList}
                    data={data}
                    ListHeaderComponent={() => (<View/>)}
                    ListFooterComponent={() => (<View/>)}
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#F5F5F5'}}/>}
                    renderItem={this._renderItem}
                    onEndReachedThreshold={20}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        )
    }

    _renderItem = item => {
        let index = item.index
        let title = item.item.title
        return (
            <TouchableOpacity
                key={index}
                style={[{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 100,
                    height: 44
                }, this.state.selectedRootCate === index ? {
                    backgroundColor: '#F5F5F5',
                    borderLeftWidth: 3,
                    borderLeftColor: 'red'
                } : {backgroundColor: 'white'}]}
                onPress={() => {
                    setTimeout(() => {
                        (CateData.data.length - index) * 45 > height - 65 ? this._flatList.scrollToOffset({
                            animated: true,
                            offset: index * 45
                        }) : null
                        this._sectionList.scrollToLocation({
                            itemIndex: 0,
                            sectionIndex: 0,
                            animated: true,
                            viewOffset: 20
                        })
                    }, 100)
                    this.setState({selectedRootCate: index})
                }}
            >
                <Text
                    style={{fontSize: 13, color: this.state.selectedRootCate === index ? 'red' : '#333'}}>{title}</Text>
            </TouchableOpacity>
        )
    }

    renderCell(item, sectionIndex, index) {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    height: 110,
                    width: (width - 140) / 3,
                    backgroundColor: 'white',
                    marginBottom: 8,
                    marginRight: 10,
                    alignItems: 'center'
                }}
                onPress={() => alert(`点击了第${sectionIndex}组中的第${index}个商品`)}
            >
                <Image style={{width: 60, height: 70, marginVertical: 10}} source={{uri: item.itemImg}}/>
                <Text style={{color: '#ccc', fontSize: 13}}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    renderItemCate() {
        let tempArr = CateData.data[this.state.selectedRootCate].secondCateItems.map((item, index) => {
            let tempObj = {}
            tempObj.key = item.secondCateName
            tempObj.data = item.items
            tempObj.data.sectionId = index
            return tempObj
        })
        return (
            <View style={{flex: 1, backgroundColor: '#F5F5F5', marginLeft: 10, marginTop: 8}}>
                <SectionList
                    ref={(ref) => this._sectionList = ref}
                    renderSectionHeader={this.sectionComp}
                    renderItem={(data) => this.renderItem(data)}
                    sections={tempArr}
                    ItemSeparatorComponent={() => <View/>}
                    ListHeaderComponent={() => <View/>}
                    ListFooterComponent={() => <View/>}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index + item}
                />
            </View>
        )
    }


    sectionComp(item) {
        return (
            <View style={{backgroundColor: '#F5F5F5', justifyContent: 'center'}}>
                <Text style={{color: 'gray', marginBottom: 8}}>{item.section.key}</Text>
            </View>
        )
    }

    renderItem(item) {
        let sectionIndex = item.section.data.sectionId
        let data = item.section.data
        return item.index === 0 ?
            <View key={item.index} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {data.map((cell, index) => this.renderCell(cell, sectionIndex, index))}
            </View> : null
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
                    margin: MARGIN_5,
                    width: ('SCREEN_WIDTH' - 6 * MARGIN_5) / 2,
                    backgroundColor: 'white',
                }}>
                    <Image style={{
                        width: (SCREEN_WIDTH - 6 * MARGIN_5) / 2,
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

class ModalExample extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}>
                    <View style={{height: 200}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    choose_text: {
        color: 'black',
        fontSize: 15,
    },
    un_choose_text: {
        color: 'gray',
        fontSize: 14,
    },
    red_item: {
        backgroundColor: 'red',
        marginLeft: MARGIN_5,
        marginRight: MARGIN_5,
        height: 3,
        marginTop: MARGIN_5,
        borderRadius: 20,
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
})

export default createAppContainer(VideoListScreen);
