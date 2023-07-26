import React from 'react';
import Card from './Card';

type TitleKeyProps = {
  title: string;
  subtitle: string;
};

const dataSet = [
  { title: 'CNPJ', subtitle: '30.503.469/0001-04' },
  { title: 'RAZÃO SOCIAL', subtitle: 'MARCIO MACHADO PONTES' },
  { title: 'MATRIZ OU FILIAL', subtitle: 'MATRIZ' },
  { title: 'NOME FANTASIA', subtitle: 'RAZIN STUDIO' },
  { title: 'SITUAÇÃO CADASTRAL', subtitle: 'ATIVA' },
  { title: 'DATA DA SITUAÇÃO CADASTRAL', subtitle: '20/08/2021' },
  { title: 'MOTIVO DA SITUAÇÃO CADASTRAL', subtitle: '********' },
  { title: 'NATUREZA JURÍDICA', subtitle: '2135 | EMPRESÁRIO (INDIVIDUAL)' },
  { title: 'SITUAÇÃO ESPECIAL', subtitle: '********' },
  { title: 'DATA DA SITUAÇÃO ESPECIAL', subtitle: '********' },
  { title: 'DATA DE ABERTURA', subtitle: '19/05/2018' },
  { title: 'IDADE', subtitle: '5 ANOS, 0 MESES E 19 DIAS' },
  { title: 'PORTE (RFB)', subtitle: 'MICRO EMPRESA' },
  { title: 'CAPITAL SOCIAL', subtitle: 'R$ 10.000,00' },
  { title: 'ÚLTIMA ATUALIZAÇÃO DOS DADOS', subtitle: '18/04/2023' },
];

function TitleKey({ title, subtitle }: TitleKeyProps) {
  return (
    <div className='text-sm flex flex-col py-2'>
      <h3 className='font-bold'>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

function CompanyDetails() {
  return (
    <div className='w-full flex flex-col gap-6'>
      <Card cardheader="Dados cadastrais" content={(
        <ul className='grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row'>
          {dataSet.map((item, index) => (
            <li key={index}>
              <TitleKey title={item.title} subtitle={item.subtitle} />
            </li>
          ))}
        </ul>
      )} />

      <Card cardheader="Localização:" content="" />
      <Card cardheader="Telefones:" content="" />
      <Card cardheader="Emails:" content="" />
      <Card cardheader="Atividade econômica principal:" content="" />
      <Card cardheader="Atividades econômicas secundárias:" content="" />
      
    </div>
  );
}

export default CompanyDetails;
