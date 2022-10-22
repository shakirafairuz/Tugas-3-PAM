import React from "react";
import { TouchableOpacity, View, FlatList, StyleSheet, Text}
from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Jadwal = [
  {
    id: "1",
    keberangkatan: "Seoul",
    tujuan: "Jakarta",
    maskapai: "Incheon Air",
    tanggalberangkat: "5 Jun 2022, 19:00",
    tanggalsampai: "6 Jun 2022, 03:00",
  },
  {
    id: "2",
    keberangkatan: "Seoul",
    tujuan: "Jeju Island",
    maskapai: "Seoul Air",
    tanggalberangkat: "7 Jun 2022, 16:00",
    tanggalsampai: "8 Jun 2022, 12:00",
  },
  {
    id: "3",
    keberangkatan: "Daegu",
    tujuan: "Busan",
    maskapai: "Incheon Air",
    tanggalberangkat: "6 Jun 2022, 01:00",
    tanggalsampai: "7 Jun 2022, 03:00",
  },
  {
    id: "4",
    keberangkatan: "Seoul",
    tujuan: "Tokyo",
    maskapai: "Asiana Airiles",
    tanggalberangkat: "6 Jun 2022, 07:00",
    tanggalsampai: "7 Jun 2022, 12:00",
  },
  {
    id: "5",
    keberangkatan: "Seoul",
    tujuan: "Tokyo",
    maskapai: "Jeju Air",
    tanggalberangkat: "7 Jun 2022, 03:00",
    tanggalsampai: "8 Jun 2022, 01:30",
  },
  {
    id: "6",
    keberangkatan: "Seoul",
    tujuan: "Tokyo",
    maskapai: "Incheon Air",
    tanggalberangkat: "7 Jun 2022, 12:30",
    tanggalsampai: "8 Jun 2022, 01:00",
  },
];

const Main = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <TouchableOpacity>
       <Text>
         {item.keberangkatan} - {item.tujuan}
       </Text>
       <View style={styles.detailContainer}>
         <View style={styles.maskapaiContainer}>
           <FontAwesome name="plane" size={28} color="black" />
           <Text style={styles.maskapai}>{item.maskapai}</Text>
         </View>
         <View style={styles.tanggalContainer}>
           <Text style={styles.tanggal}>
             <FontAwesome5 name="plane-departure" size={15} color="black" />
             {item.tanggalberangkat}
           </Text>
           <Text style={styles.tanggal}>
             <FontAwesome5 name="plane-arrival" size={15} color="black" />
             {item.tanggalsampai}
           </Text>
         </View>
       </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Travelin Aja</Text>
          <Feather name="user" size={30} color="black" />
        </View>
        <Text style={styles.subTitle}>Hasil Pencarian Penerbangan</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
        Copyright Shakira Fairuz Putri - 120140217
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#327d75",
    marginTop: 15,
  },
  header: {
    width: "100%",
    backgroundColor: "#327d75",
    padding: 15,
    marginBottom: 8,
  },
  title: {
    color: "black",
    fontSize: 30,
  },
  subTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#bfe3df",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  tanggal: {
    color: "#103a36",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maskapaiContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  tanggalContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  maskapai: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  copyright: {
    color: "white",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default Main;