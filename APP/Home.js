import { React, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity }
from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [Keberangkatan, setKeberangkatan] = useState("");
  const [Tujuan, setTujuan] = useState("");
  const [Tanggal, setTanggal] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Ionicons name="menu-outline" size={30} color="black" />
         <Text style={styles.title}>Travelin Aja</Text>
         <Feather name="user" size={30} color="black" />
      </View>
      <View style={styles.UIContainer}>
         <Text>Keberangkatan</Text>
         <View style={styles.textInput}>
            <MaterialIcons name="flight-takeoff" size={24} color="black" />
            <TextInput
            style={styles.input}
            onChangeText={setKeberangkatan}
            value={Keberangkatan}
            placeholder="contoh: Seoul"
            selectTextOnFocus={false}
            />
        </View>
        <Text>Tujuan</Text>
        <View style={styles.textInput}>
            <MaterialIcons name="flight-land" size={24} color="black" />
            <TextInput
            style={styles.input}
            onChangeText={setTujuan}
            value={Tujuan}
            placeholder="contoh: Jakarta"
            />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInput}>
           <MaterialIcons name="date-range" size={24} color="black" />
           <TextInput
             style={styles.input}
             onChangeText={setTanggal}
             value={Tanggal}
             placeholder="DD/MM/YYYY"
           />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
           <Text style={styles.button}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
         <Text style={styles.copyright}>
           copyright Shakira Fairuz Putri - 120140217
         </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#63b3ab",
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "bold",
    color: "#00203FFF",
    borderWidth: 1,
    borderColor: "#00203FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#327d75",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 35,
  },
  footer: {
    marginTop: 200,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#bfe3df",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-between",
    width: "110%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  textInput: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#103a36",
  },
  UIContainer: {
    backgroundColor: "#bfe3df",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "#103a36",
    marginBottom: 5,
    padding: 5,
    marginTop: 5,
    textAlign: "center",
  },
});

export default Home;