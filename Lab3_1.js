import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function Lab3_1() {
  const [text, setText] = useState("");

  const [storage, setStorage] = useState([]);
  return (
    <View style={styles.container}>
      <View style ={styles.view}>
        <Text style={{ fontSize: 18 }}>สมุดบันทึก</Text>
        <TextInput
          placeholder="เพิ่มข้อความที่นี้"
          style={styles.input}
          value={text}
          onChangeText={setText}
          />
        <View style={styles.button}>
          <Button title="บันทึก" onPress={() => setStorage([...storage,{id:storage.length, name:text}])} />
        </View>
      </View>
      <ScrollView style ={styles.scrollview}>
        {storage.map((item) => {
          return (
            <View  key={item.id}  style={styles.view}>
              <Text style={{fontSize:18}}>{item.id}{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  button: {
    width: "70%",
  },
  scrollview: {
    padding: 4,
  },
  view: {
    alignItems: "center",
    width: "100%",
    // borderWidth: 1,
  },
  scrollview: {
    marginVertical: 10,
    width: "100%",
    // borderWidth: 1,
  },
});
