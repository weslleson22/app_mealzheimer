import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import { RectButton } from "react-native-gesture-handler";
import fonts from "../styles/fonts";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

export function TelaEndereco() {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    fetchStates();
  }, []);

  async function fetchStates() {
    try {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setStates(response.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  }

  async function fetchCities(state) {
    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  function handleNavigateMap() {
    navigate("Points", {
      uf,
      city,
    });
  }

  function handleNavigateTelaPrincipal() {
    navigate("TelaPrincipal");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container1}>
        <TouchableOpacity onPress={handleNavigateTelaPrincipal}>
          <Icon name="arrow-left" size={30} color="#2D9CDB" />
        </TouchableOpacity>

        <View style={styles.main}>
          <Image source={require("../assets/destination-point.png")} />
          <View>
            <Text style={styles.title}>Localização das pessoas</Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem suas localizações.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Picker
            style={styles.input}
            selectedValue={uf}
            onValueChange={(itemValue, itemIndex) => {
              setUf(itemValue);
              fetchCities(itemValue);
            }}
          >
            <Picker.Item label="Selecione o estado" value="" />
            {states.map((state) => (
              <Picker.Item
                key={state.id}
                label={state.nome}
                value={state.sigla}
              />
            ))}
          </Picker>
          <Picker
            style={styles.input}
            selectedValue={city}
            onValueChange={(itemValue) => setCity(itemValue)}
          >
            <Picker.Item label="Selecione a cidade" value="" />
            {cities.map((city) => (
              <Picker.Item key={city.id} label={city.nome} value={city.nome} />
            ))}
          </Picker>

          <RectButton style={styles.button} onPress={handleNavigateMap}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color={"#fff"} size={40} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Buscar</Text>
          </RectButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#322153",
    fontSize: 42,
    fontFamily: fonts.heading,
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#322153",
    fontSize: 16,
    marginTop: 16,
    fontFamily: fonts.heading,
    maxWidth: 260,
    lineHeight: 24,
    textAlign: "center",
  },

  footer: {},

  input: {
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    textAlign: "center",
  },

  button: {
    backgroundColor: colors.blue,
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: fonts.heading,
    fontSize: 16,
  },
});

export default TelaEndereco;
