import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from 'react-native-elements';
const CardForm = ({ item, navigateTo }) => {
  console.log(item.media[0]['media-metadata'][1].url)
  return (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri:
            item.media[0]['media-metadata'][1].url ?
              item.media[0]['media-metadata'][1].url
              :
              'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
        }}
      />
      <Text style={{ marginBottom: 10 }}>
        {item.abstract}
      </Text>
      <Button
        onPress={() => { navigateTo('NewsDetails', item) }}
        icon={
          <Icon
            name="code"
            color="#ffffff"
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />

    </Card>
  )
}

export default CardForm

const styles = StyleSheet.create({})