import Head from "next/head";
import { useRef, useState } from "react";
import generatePDF, { Margin } from "react-to-pdf";
import { Main, Content, Button } from "./styles";

const customization = {
  //Baixar/Salvar = save / Abrir no navegador = open
  method: "open",
  page: {
    // Definir margem: SMALL ou MEDIUM
    margin: Margin.MEDIUM,
    // Formato da página: A4 ou letter
    format: "A4",
    // Orientação do arquivo: portrait ou landscape
    orientation: "landscape",
  },
};

export default function Home() {
  const [userName, setUserName] = useState("Nome do Usuário");
  const [treeName, setTreeName] = useState("Nome da Árvore");

  const recoverContentToPDF = () => document.getElementById("content-id");

  return (
    <>
      <Head>
        <title>Certificado de Posse da Árvore</title>
      </Head>
      <Main>
        <div>
          <Button
            onClick={() => generatePDF(recoverContentToPDF, customization)}
          >
            Gerar Certificado
          </Button>

          <Content id="content-id">
            <h1>Certificado de Posse de Árvore</h1>
            <p>
              Este certificado confirma que <strong>{userName}</strong> é o
              proprietário da árvore <strong>{treeName}</strong>.
            </p>
            <p>Data da Aquisição: {new Date().toLocaleDateString()}</p>
          </Content>
        </div>
      </Main>
    </>
  );
}
