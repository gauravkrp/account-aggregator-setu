import React, { useState } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import TextInput from "../components/TextInput";
import { ActivityIndicator, View } from "react-native";
import { numberValidator } from "../helpers/numberValidator";
import ApiRoutes from "../core/apiRoutes";

const API = new ApiRoutes();

export default function StartScreen({ navigation }) {
  const [number, setNumber] = useState({ value: "", error: "" });
  const [isLoading, setLoading] = useState(false);

  const getAnumatiURL = async () => {
    setLoading(true);
    const numberError = numberValidator(number.value);

    if (numberError) {
      setNumber({ ...number, error: numberError });
      setLoading(false);
      return;
    }
    
    API.getAnumatiURL(number.value)
      .then(response => {
        // console.log('response', response);
        // route to Setu AA WebView and send anumatiURL in router params
        navigation.navigate("SetuAAScreen", { anumatiURL: response });
      }).catch(err => {
        console.error(err);
        setNumber({ ...number, error: err.message || 'Some error occurred!' });
      })
      .finally(() => setLoading(false));
    
  };

  return (
    <Background>
      <Logo />
      <Header>ZenMoney PFM</Header>
      {/* <Header>Personal Finance Management</Header> */}
      <Paragraph>
        We need access to your financial data to provide you a complete picture of your financial health.
      </Paragraph>
      <Paragraph>Manage all your money, investments and budget in one place.</Paragraph>
      <TextInput
        label="Mobile number"
        returnKeyType="next"
        value={number.value}
        onChangeText={(text) => setNumber({ value: text, error: "" })}
        error={!!number.error}
        errorText={number.error}
        keyboardType="number-pad"
        maxLength={10}
      />
      <Button mode="contained" onPress={getAnumatiURL} disabled={number.value.length < 10}>
        Continue
      </Button>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
    </Background>
  );
}
