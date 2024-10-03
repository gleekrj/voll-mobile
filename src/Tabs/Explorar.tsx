import { Box, ScrollView, VStack } from "native-base";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/Titulo";
import { CardConsulta } from "../componentes/CardConsulta";

const resultadoBusca = [
  {
    id: 1,
    nome: "Dr. Eltoma Lucko",
    especialidade: "Cardiologista",
    foto: "https://r2-us-west.photoai.com/1705986809-72f79eea0b2b7e4d6db9958fff28eeda-13.jpg",
  },
  {
    id: 2,
    nome: "Dr. Alco Lengel",
    especialidade: "Fisioterapeuta",
    foto: "https://c.pxhere.com/images/c6/91/441b53afa0a69dc4acfbb01dd205-1447095.jpg!d",
  },
  {
    id: 3,
    nome: "Dr. Parale Lepi Pedo",
    especialidade: "Otorrinolaringologista",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Foto_de_perfil_de_Lucas.jpg/600px-Foto_de_perfil_de_Lucas.jpg?20230118235756",
  },
];

export default function Explorar() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}
      >
        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={5}
          shadow="1"
          borderRightRadius="md"
        >
          <EntradaTexto placeholder="Digite a especialidade" />
          <EntradaTexto placeholder="Digite sua localização" />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>
        <Titulo color="blue.500" alignSelf="center" mt="4" mb="4">
          Resultado da busca
        </Titulo>

        {resultadoBusca.map((resultado) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={resultado.id}
          >
            <CardConsulta
              nome={resultado.nome}
              especialidade={resultado.especialidade}
              foto={resultado.foto}
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
