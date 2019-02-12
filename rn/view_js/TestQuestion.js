'use strict'
import React from 'react';// 各种包一定要注意导入
import {createAppContainer} from 'react-navigation';
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

var ClassDataBase = [
    {
        key: 'a',
        keyName: '安全总监质量应聘',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'b',
        keyName: '安全总监质量应聘',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
    {
        key: 'c',
        keyName: '安全总监质量应聘',
        times: '播放2880次',
        time: '2018-08-17',
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        size: '3.42M'
    },
]

var sections = [
    {key: '2018-11-02', data: ClassDataBase},
    {key: '2018-11-03', data: ClassDataBase},
    {key: '2018-11-04', data: ClassDataBase},
    {key: '2018-11-05', data: ClassDataBase},
    {key: '2018-11-06', data: ClassDataBase},
    {key: '2018-11-07', data: ClassDataBase},
    {key: '2018-11-08', data: ClassDataBase},
    {key: '2018-11-09', data: ClassDataBase},
]

class TestQuestionScreen extends React.Component {

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

                    {/*列表部分*/}
                    <ClassFlatList/>

                </View>
            </ScrollView>
        );

    }

    renderNavBar() {
        return (
            <NaviBar title={'试题列表'} hasSeperatorLine={true}/>
        )
    }

}

/**
 * 试题列表
 */
class ClassFlatList extends React.Component {

    componentDidMount() {

    }

    _renderSectionHeader(info) {

        var txt = info.section.key;
        return (
            <View style={{width: width, backgroundColor: 'white', paddingLeft: MARGIN_5 * 2, marginTop: 10}}>
                <Text style={{height: 30, textAlignVertical: 'center', fontSize: 13, fontWeight: 'bold',}}>{txt}</Text>
            </View>
        )
    }

    _renderItem(info) {

        return (
            <TouchableOpacity activeOpacity={1}>
                <View style={{
                    width: "100%",
                    height: 60,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    padding: MARGIN_5,
                    boxSizing: 'border-box'
                }}>
                    <Image style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'cover'
                    }} source={require('../img/ic_pdf.jpg')}>
                    </Image>
                    <View style={{flex: 1}}>
                        <Text style={styles.pdf_content_text}>{info.item.keyName}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.pdf_times_text}>{info.item.time}</Text>
                            <Text style={styles.pdf_times_text}>{info.item.times}</Text>
                            <Text style={styles.pdf_size_text}>{info.item.size}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>
                <SectionList
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    sections={sections}
                    refreshing={false}
                    onRefresh={() => {
                        alert("刷新")
                    }}
                    keyExtractor={(item, index) => ("index" + index + item)}
                    onEndReached={(info) => {
                        alert("到达底部")
                    }}
                    onEndReachedThreshold={0}
                    stickySectionHeadersEnabled={true}
                />
            </View>
        );
    }

    // _renderItem({item, index}) {
    //
    //
    // }


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

export default createAppContainer(TestQuestionScreen);
