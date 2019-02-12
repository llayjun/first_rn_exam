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

class NewCourseScreen extends React.Component {

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

                    {/*列表部分*/}
                    <ClassFlatList/>

                </View>
            </ScrollView>
        );

    }

    renderNavBar() {
        return (
            <NaviBar title={'最新课件'} hasSeperatorLine={true}/>
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
            <View style={{height: 0, flexDirection: 'row', flex: 1, backgroundColor: '#F5F5F5'}}>
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
 * 课件列表
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

export default createAppContainer(NewCourseScreen);
