import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import MainLayout from 'app/core/layouts/MainLayout';

const prisma = new PrismaClient();

export default function SearchResultsPage({ results }) {
  const router = useRouter();
  const { query } = router;

  return (
    <MainLayout>
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Resultados da pesquisa para: {query.searchTerm}
        </h2>
        <hr className="mb-4" />
        <div>
          {results.map((result) => (
            <div
              className="bg-blue-100 rounded-md shadow-md p-2 mb-4"
              key={result.id}
            >
              <p>{result.name}</p>
              {/* Renderize os detalhes relevantes do resultado da busca */}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  const { searchTerm } = query;

  // Execute a lógica de busca com base no searchTerm e retorne os resultados
  const results = await prisma.empresa.findMany({
    where: {
      OR: [
        { razao_social: { contains: searchTerm } },
        { natureza_juridica: { contains: searchTerm } },
      ],
    },
  });

  return {
    props: {
      results,
    },
  };
}
