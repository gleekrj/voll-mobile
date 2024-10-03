import { Divider, VStack, ScrollView } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consultas() {
  return (
    <ScrollView p="5">
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt="5" mb="5">
        Agendar outra consulta
      </Botao>
      <Titulo fontSize="lg" color="blue.500" alignSelf="flex-start" mb={2}>
        Próximas Consultas
      </Titulo>
      <CardConsulta
        nome="Dr. Eltoma Lucko"
        especialidade="Cardiologista"
        foto="https://r2-us-west.photoai.com/1705986809-72f79eea0b2b7e4d6db9958fff28eeda-13.jpg"
        data="02/11/2024"
        foiAgendado
      />
      <Divider mt={5} />
      <Titulo fontSize="lg" color="blue.500" alignSelf="flex-start" mb={2}>
        Consultas Passadas
      </Titulo>
      <CardConsulta
        nome="Dr. Eltoma Lucko"
        especialidade="Cardiologista"
        foto="https://r2-us-west.photoai.com/1705986809-72f79eea0b2b7e4d6db9958fff28eeda-13.jpg"
        data="02/07/2024"
        foiAtendido
      />
      <CardConsulta
        nome="Dra. Lou Kavar Rida"
        especialidade="Psiquiatra"
        foto="https://r2-us-west.photoai.com/1706661050-00d0a04e2df7970285649868f1c09f1e-9.jpg"
        data="01/05/2024"
        foiAtendido
      />
      <CardConsulta
        nome="Dr. Eskys Ytto"
        especialidade="Neurologista"
        foto="https://r2-us-west.photoai.com/1706661149-8485820a0003df5188e7c41e5db1a783-15.jpg"
        data="29/04/2024"
        foiAtendido
      />
    </ScrollView>
  );
}
