import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Box from "../components/Box";
import api from "../axios/api";
import { Button, TextInput } from "react-native-paper";

const Home = () => {
  const [dados, setDados] = useState();
  const [nome, setNome] = useState();
  const [gastos, setGastos] = useState(0);
  const [entradas, setEntradas] = useState(0);

  const inserirGasto = async () => {
    try {
      const response = await api.post("/inserirGasto/3", {
        gastos: gastos,
      });
      alert(response.data.message);
      handleDados();
    } catch (error) {
      console.log(error);
    }
  };

  const inserirEntrdas = async () => {
    try {
      const response = await api.post("/inserirEntradas/3", {
        entradas: entradas,
      });
      alert(response.data.message);
      handleDados();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDados = async () => {
    try {
      const response = await api.get("/verDados/3");
      setDados(response.data.dados);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dados) {
      const nomes = dados.map((item) => item.nome);
      setNome(nomes);
    } else {
      handleDados();
    }
  }, [dados]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={{ alignSelf: "flex-start", fontSize: 20 }}>
          Hi, {nome && nome}
        </Text>

        {dados &&
          dados.map((item, index) => {
            return (
              <View
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
                key={index}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 20,
                    marginTop: 20,
                  }}
                >
                  <Box title={"Salario"} value={item.salario} />
                  <Box title={"Gastos"} value={item.gastos} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 20,
                    marginTop: 20,
                  }}
                >
                  <Box title={"Entradas"} value={item.entradas} />
                  <Box title={"Saldo"} value={item.saldo} />
                </View>
              </View>
            );
          })}
        <Text style={{ alignSelf: "flex-start", fontSize: 20, marginTop: 50 }}>
          Realizar Operações
        </Text>
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <TextInput
            style={{ width: "70%", backgroundColor: "white" }}
            value={String(gastos)}
            onChangeText={(e) => setGastos(Number(e))}
            activeOutlineColor="red"
            activeUnderlineColor="red"
            label="Inserir gasto"
          ></TextInput>
          <Button onPress={inserirGasto}>Enviar</Button>
        </View>
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <TextInput
            style={{ width: "70%", backgroundColor: "white" }}
            value={String(entradas)}
            onChangeText={(e) => setEntradas(Number(e))}
            activeOutlineColor="red"
            activeUnderlineColor="red"
            label="Inserir Entradas"
          ></TextInput>
          <Button onPress={inserirEntrdas}>Enviar</Button>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
});
//entradas 1990  2000
//saldo   1744  1754
