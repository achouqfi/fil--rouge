import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
      <TouchableOpacity style={{ backgroundColor:'grey', width: 100, height: 100, borderRadius: 150 }} onPress={pickImage}>
        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 150 }} />}
      </TouchableOpacity>
    </View>
  );
}
