import { GiDeer } from "react-icons/gi";
import { GiHighGrass } from "react-icons/gi";
import { TbTractor } from "react-icons/tb";
import { GiWheat } from "react-icons/gi";
import styled from "styled-components";

// Define o estilo para os ícones
const Icon = styled.div`
  color: #376b00; /* Cor dos ícones */
  font-size: 50px; /* Tamanho dos ícones */
  transform: rotate(45deg);
`;

// Define o estilo do fundo
const BackgroundContainer = styled.div`
  position: fixed; /* Posição fixa */
  top: 0;
  left: 0;
  width: 100%; /* Preenche toda a largura */
  height: 100%; /* Preenche toda a altura */
  z-index: -1; /* Para colocar o fundo atrás de outros elementos */
  background-color: #377c2b; /* Cor de fundo */
  display: grid;
  grid-template-columns: repeat(18, 1fr); /* 2 colunas */
  grid-auto-rows: 80px; /* Altura das linhas */
`;

function Background() {
  const icons = [
    { icon: <GiDeer />, key: "deer" },
    { icon: <TbTractor />, key: "tractor" },
    { icon: <GiHighGrass />, key: "highGrass" },
    { icon: <GiWheat />, key: "wheat" },
  ];

  // Array para armazenar a sequência de ícones
  const pattern = [
    [icons[0], icons[1]],
    [icons[2], icons[3]],
  ];

  // Repete o padrão para preencher todo o fundo
  const repeatedPattern = Array.from({ length: 120 }, (_, index) => index).map(
    (index) => pattern[index % pattern.length]
  );

  return (
    <BackgroundContainer>
      {/* Renderiza o padrão repetido */}
      {repeatedPattern.map((row, rowIndex) =>
        row.map((item, colIndex) => (
          <Icon key={`${item.key}-${rowIndex}-${colIndex}`}>{item.icon}</Icon>
        ))
      )}
    </BackgroundContainer>
  );
}

export default Background;
