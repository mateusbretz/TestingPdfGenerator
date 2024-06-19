import Head from "next/head";
import { useState } from "react";
import generatePDF, { Margin } from "react-to-pdf";
import { Main, Button } from "./styles";

const customization = {
  // Baixar/Salvar = save / Abrir no navegador = open
  method: "open",
  page: {
    // Definir margem: SMALL ou MEDIUM
    // margin: Margin.MEDIUM, // Certo seria assim, mas não centralizou no pdf
    margin: { top: 50, right: 40, bottom: 10, left: 60 },
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

  const handleGeneratePDF = () => {
    const content = document.getElementById("content-id");
    content.style.display = "block"; // Mostra o conteúdo antes de gerar o PDF

    generatePDF(recoverContentToPDF, customization).then(() => {
      content.style.display = "none"; // Esconde o conteúdo após gerar o PDF
    });
  };

  return (
    <>
      <Head>
        <title>Certificado de Posse da Árvore</title>
      </Head>
      <Main>
        <div>
          <Button onClick={handleGeneratePDF}>Gerar Certificado</Button>

          <div id="content-id" style={{ display: "none" }}>
            <h1>Certificado de Posse de Árvore</h1>
            <p>
              Este certificado confirma que <strong>{userName}</strong> é o
              proprietário da árvore <strong>{treeName}</strong>.
            </p>
            <p>Data da Aquisição: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </Main>
    </>
  );
}
