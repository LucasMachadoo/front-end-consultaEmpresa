import ButtonLink from '@/components/atoms/ButtonLink'

export default function Sobre() {
  return (
    <>
      <section className="">
        <h1 className='mt-3 font-bold text-3xl text-center uppercase py-2'>Sobre</h1>
        <div className="flex flex-col justify-center items-center gap-6 text-white">
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Adipiscing bibendum est ultricies integer. 
          </p>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Adipiscing bibendum est ultricies integer. 
          </p>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero. Adipiscing bibendum est ultricies integer. 
          </p>
          <ButtonLink href="/sobre" label="Entre em contato" className="mt-4  w-[200px]" />
        </div>
      </section>
    </>
  )
}
