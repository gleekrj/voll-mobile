import { Image, ScrollView, Box, Checkbox } from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { Text } from "native-base";
import { secoes } from "./utils/CadastroEntradaTexto";

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecoes() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Titulo>{secoes[numSecao].titulo}</Titulo>
      <Box>
        {secoes[numSecao].entradaTexto?.map((entrada) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              secureTextEntry={entrada.secureTextEntry}
              key={entrada.id}
            />
          );
        })}
      </Box>
      <Box>
        {secoes[numSecao].checkbox && (
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt={4} mb={2}>
            Selecione os planos:
          </Text>
        )}
        {secoes[numSecao].checkbox?.map((check) => {
          return (
            <Checkbox value={check.value} key={check.id}>
              {check.value}
            </Checkbox>
          );
        })}
      </Box>
      {numSecao > 0 && (
        <Botao bgColor="gray.400" onPress={() => voltarSecao()}>
          Voltar
        </Botao>
      )}
      <Botao onPress={() => avancarSecoes()} mt={4} mb={20}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
