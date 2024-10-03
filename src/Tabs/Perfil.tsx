import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>
        <Avatar
          source={{
            uri: "https://r2-us-west.photoai.com/1706661050-00d0a04e2df7970285649868f1c09f1e-9.jpg",
          }}
          mt={5}
          size="xl"
        />

        <Titulo color="blue.500">Informações Pessoais</Titulo>
        <Titulo fontSize="lg" mb={5}>
          Maurício Pereira
        </Titulo>
        <Text>16/08/1999</Text>
        <Text>Rio de Janeiro</Text>
        <Divider mt={5} />
        <Titulo color="blue.500" mb={1}>
          Histórico Médico
        </Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
