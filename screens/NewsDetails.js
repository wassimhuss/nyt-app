
import React from 'react'
import { View, ScrollView, StyleSheet, Image, FlatList, Text, Button, TouchableOpacity, Share } from 'react-native';
import { Card } from 'react-native-elements';
const NewsDetails = ({ route }) => {
  const onShare = async (data) => {
    try {
      const result = await Share.share({
        message:
          data.web_url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const data = route.params.item
  //console.log(""data)
  return (
    <>
      <View style={{ marginHorizontal: "5%", alignItems: "center", height: "50%" }}>
        <Image
          style={{ width: "100%", height: "50%", marginTop: "5%" }}
          source={{
            uri:
              data.media[0]['media-metadata'][1].url ?
                data.media[0]['media-metadata'][1].url
                :
                'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
          }}
        />

        <Text style={{ textAlign: "center", marginTop: "3%", fontSize: 18, color: "black" }}>Description : {data.abstract}</Text>


      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1, paddingHorizontal: "5%" }}>
        <Text style={{ fontStyle: 'italic', fontWeight: "bold", color: "black", flex: 1 }}> {data.byline}</Text>
        <Text style={{ fontStyle: 'italic', fontWeight: "bold", color: "black", }}> {data.published_date}</Text>
      </View>
    </>
  )
}

export default NewsDetails

const styles = StyleSheet.create({})