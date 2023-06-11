import React from 'react';
import {FlatList, Image, Pressable, Text} from 'react-native';
import {StyleProp, StyleSheet, View, ViewStyle, ScrollView} from 'react-native';
import { CrewListItem } from '../components/Items/CrewListItem';
import { ActorListItem } from '../components/Items/ActorListItem';
import { ReviewListItem } from '../components/Items/ReviewListItem';
import { BigTitleText } from '../components/Text/BigTitleText';
import { SubtitleText } from '../components/Text/SubtitleText';
import { TitleText } from '../components/Text/TitleText';
import { CriticReviewScoreIndicator } from '../components/Display/CriticReviewScoreIndicator';
import colors from '../styles/colors';
import { Button, Header, Input } from '@rneui/base';
import { Tab, TabView } from '@rneui/themed';
import { RegularReviewScoreIndicator } from '../components/Display/RegularReviewScoreIndicator';

export function MovieDetailsScreen({navigation, route}): JSX.Element {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [index, setIndex] = React.useState(0);
  return <ScrollView>
            <View style={{height: 100, backgroundColor: 'grey'}}/>
                <View style={{flexGrow: 1, backgroundColor: 'black', alignItems: 'flex-start'}}>
                  <Image
                    source={{
                    uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
                    }}
                    style={{
                      position: 'absolute',
                      top: -70,
                      height: 140,
                      width: 100,
                      marginHorizontal: 10}} 
                    />

                  <View style={{alignItems: 'flex-start', marginLeft: 125, marginTop: 5 }}>
                    <BigTitleText>John Wick</BigTitleText>
                    <SubtitleText>2014</SubtitleText>
                  </View>

                  <View style={{alignItems: 'flex-start', padding: 10}}>
                    <SubtitleText>Genre: Thriller, Action</SubtitleText>
                    <SubtitleText>Synopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </SubtitleText>
                  </View>

                  <View style={{padding:10}}>
                    <TitleText>Crew</TitleText>
                  </View>
                  <FlatList
                    style={{padding: 10}}
                    data={arr}
                    renderItem={CrewListItem}
                    horizontal
                    ItemSeparatorComponent={() => {
                      return (
                        <View
                        style={{
                        height: "100%",
                        width: 20,
                        }} />
                      );
                    }}
                  />

                  <View style={{padding:10}}>
                    <TitleText>Cast</TitleText>
                  </View>
                  <FlatList
                    style={{padding: 10}}
                    data={arr}
                    renderItem={ActorListItem}
                    horizontal
                    ItemSeparatorComponent={() => {
                      return (
                        <View
                        style={{
                        height: "100%",
                        width: 20,
                        }} />
                      );
                    }}
                  />

                  <View style={{flexDirection: 'row', alignSelf:'center' ,alignItems: 'center', justifyContent: 'center', gap: 10,padding: 10}}>                     
                      <View style={{width:160, height:100, display:'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-end',gap: 4, borderRadius: 5 ,backgroundColor: colors.mediumBlack }}>
                        <View style={{padding:10}}>
                          <CriticReviewScoreIndicator score={5}></CriticReviewScoreIndicator>
                          <TitleText >Critic score</TitleText>
                          <SubtitleText>2222 reviews</SubtitleText>
                        </View>           
                      </View>
                      <View style={{width:160, height:100, display:'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start',gap: 4, borderRadius: 5 ,backgroundColor: colors.mediumBlack}}>
                        <View style={{padding: 10}}>
                          <RegularReviewScoreIndicator score={5}></RegularReviewScoreIndicator>
                          <TitleText>Regular score</TitleText>
                          <SubtitleText>2222 reviews</SubtitleText>
                        </View>                     
                      </View>
                  </View>
                  
                  <View style={{padding:10}}>
                    <TitleText>Reviews</TitleText>
                  </View>

                  <View style={{width: 350,borderRadius: 5, alignSelf: 'center', padding:10}}>
                    <Button
                      onPress={() => navigation.navigate('CreateReview')}
                      title="Create a new review"
                      color="#EF3651"   
                    />
                  </View>
                  
                    <Tab
                      value={index}
                      onChange={(e) => setIndex(e)}
                    >
                      <Tab.Item
                        title="Recent"
                        titleStyle={{ fontSize: 12, color: '#EF3651' }}
                      />
                      <Tab.Item
                        title="favorite"
                        titleStyle={{ fontSize: 12, color: '#EF3651' }}
                      />
                      <Tab.Item
                        title="cart"
                        titleStyle={{ fontSize: 12, color: '#EF3651' }}
                      />
                    </Tab>

                    <TabView value={index} onChange={setIndex}>
                      <TabView.Item style={{ backgroundColor: 'black', width: '100%'}}>
                        <BigTitleText>Trung</BigTitleText>
                      </TabView.Item>
                      <TabView.Item style={{ backgroundColor: 'black', width: '100%' }}>
                        <BigTitleText>Tung</BigTitleText>
                      </TabView.Item>
                      <TabView.Item style={{ backgroundColor: 'black', width: '100%' }}>
                        <BigTitleText>rung</BigTitleText>
                      </TabView.Item>
                    </TabView>
                  
                </View>
</ScrollView>;
}
