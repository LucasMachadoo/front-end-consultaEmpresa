import Card from "@/components/Card"
import CompanyDetails from "@/components/CompanyDetails"

function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="border grid grid-cols-2">
      {children}
    </div>
  )
}

export default function Empresa() {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3 flex flex-col gap-6">
          <Card cardheader="Empresa XYZ" content="dasdasd" />
          <Card cardheader="" content="O CNPJ da empresa [Fulano da Silva] (Razin Studio) é 30.503.469/0001-04. Com sede em RIO DE JANEIRO, RJ, possui 5 anos, 0 meses e 19 dias e foi fundada em 19/05/2018. A sua situação cadastral é ATIVA e sua principal atividade econômica é Marketing Direto." />
        </div>
        <CompanyDetails />
      </div>

    </section>
  )
}
