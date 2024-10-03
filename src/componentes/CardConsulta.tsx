import { Avatar, Text, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
  nome: string;
  especialidade: string;
  foto: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export function CardConsulta({
  nome,
  especialidade,
  foto,
  data,
  foiAgendado,
  foiAtendido,
}: CardProps) {
  return (
    <VStack
      w="100%"
      p="5"
      bgColor={foiAtendido ? "blue.100" : "white"}
      borderRadius="lg"
      shadow="2"
      mb={5}
    >
      <VStack flexDir="row">
        <Avatar
          source={{
            uri: foto,
          }}
          size="lg"
        />
        <VStack pl="4">
          <Text fontSize="md" fontWeight="bold">
            {nome}
          </Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Botao mt={4}>{foiAgendado ? "Cancelar" : "Agendar Consulta"}</Botao>
    </VStack>
  );
}
