import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Image, Text} from 'react-native';
import { CriticReviewScoreIndicator } from '../Display/CriticReviewScoreIndicator';
import { RegularReviewScoreIndicator } from '../Display/RegularReviewScoreIndicator';
import { TitleText } from '../Text/TitleText';
import { SubtitleText } from '../Text/SubtitleText';

export function MovieGridItem(): JSX.Element {
  return <View style={{ width: 120 }}>
        <Image
          style={styles.movieImage}
          source={{ uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg' }}
          resizeMode="stretch"
        />
        <View
          style={{ paddingHorizontal: 5, marginTop: 5 }}
        >
          <TitleText>
          John Wick
          </TitleText>
          <SubtitleText>2014</SubtitleText>
          <View style={styles.row}>
            <View>
              <CriticReviewScoreIndicator score={8.3}/>
            </View>
            <View>
              <RegularReviewScoreIndicator score={8.3}/>
            </View>            
          </View>
        </View>
  </View>;
}

const styles = StyleSheet.create({
  movieImage: {
    width: 120, 
    height: 120, 
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 4
  },
});
