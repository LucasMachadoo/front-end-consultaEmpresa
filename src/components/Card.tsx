import React from 'react';

type CardProps = {
  cardheader: string;
  content: React.ReactNode;
};

function Card({ cardheader, content }: CardProps) {
  return (
    <div className="w-auto">
      <div className='flex bg-orange-400 p-2 rounded-t'>
        <h2 className='font-bold text-md uppercase text-white'>{cardheader}</h2>
      </div>
      <div className='flex bg-slate-100 p-2 border-b border-l border-r border-oraneg-400 rounded-b'>{content}</div>
    </div>
  );
}

export default Card;

// import React from 'react';

// type CardHeaderProps = {
//   title: string;
// };

// type CardBodyProps = {
//   content: React.ReactNode;
// };

// type TitleSubTitleProps = {
//   title: string;
//   subtitle: string;
// };

// function CardHeader({ title }: CardHeaderProps) {
//   return (
//     <div className='flex bg-slate-400 p-2'>
//       <h2>{title}</h2>
//     </div>
//   );
// }

// function CardBody({ content }: CardBodyProps) {
//   return (
//     <div className='flex bg-slate-100 p-2 border'>
//       {content}
//     </div>
//   );
// }

// function TitleSubTitle({ title, subtitle }: TitleSubTitleProps) {
//   return (
//     <div className='text-sm flex flex-col bg-slate-100 p-2 border'>
//       <h3 className='font-bold'>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// }

// const dataSet = [
//   { title: 'CNPJ', subtitle: '30.503.469/0001-04' },
//   { title: 'RAZÃO SOCIAL', subtitle: 'MARCIO MACHADO PONTES' },
//   { title: 'MATRIZ OU FILIAL', subtitle: 'MATRIZ' },
//   { title: 'NOME FANTASIA', subtitle: 'RAZIN STUDIO' },
//   { title: 'SITUAÇÃO CADASTRAL', subtitle: 'ATIVA' },
//   { title: 'DATA DA SITUAÇÃO CADASTRAL', subtitle: '20/08/2021' },
//   { title: 'MOTIVO DA SITUAÇÃO CADASTRAL', subtitle: '********' },
//   { title: 'NATUREZA JURÍDICA', subtitle: '2135 | EMPRESÁRIO (INDIVIDUAL)' },
//   { title: 'SITUAÇÃO ESPECIAL', subtitle: '********' },
//   { title: 'DATA DA SITUAÇÃO ESPECIAL', subtitle: '********' },
//   { title: 'DATA DE ABERTURA', subtitle: '19/05/2018' },
//   { title: 'IDADE', subtitle: '5 ANOS, 0 MESES E 19 DIAS' },
//   { title: 'PORTE (RFB)', subtitle: 'MICRO EMPRESA' },
//   { title: 'CAPITAL SOCIAL', subtitle: 'R$ 10.000,00' },
//   { title: 'ÚLTIMA ATUALIZAÇÃO DOS DADOS', subtitle: '18/04/2023' },
// ];

// function Card() {
//   return (
//     <div>
//       <CardHeader title="Dados Cadastrais" />
//       <CardBody content={
//         <ul>
//           {dataSet.map((item, index) => (
//             <li key={index}>
//               <TitleSubTitle title={item.title} subtitle={item.subtitle} />
//             </li>
//           ))}
//         </ul>
//       } />
//     </div>
//   );
// }

// export default Card;
