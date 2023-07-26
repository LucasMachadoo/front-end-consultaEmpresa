import { useRouter } from "next/router";

const EmpresaPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dados estáticos inventados
  const empresasData = [
    { id: "1", nome: "Empresa 1", cnpj: "123456789" },
    { id: "2", nome: "Empresa 2", cnpj: "987654321" },
    { id: "3", nome: "Empresa 3", cnpj: "555555555" },
  ];

  // Encontra a empresa com base no ID fornecido
  const empresa = empresasData.find((empresa) => empresa.id === id);

  if (!empresa) {
    return <p>Empresa não encontrada</p>;
  }

  return (
    <div>
      <h1>{empresa.nome}</h1>
      <p>CNPJ: {empresa.cnpj}</p>
    </div>
  );
};

export default EmpresaPage;
