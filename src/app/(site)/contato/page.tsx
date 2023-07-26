'use client'
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

const Contato = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar o formulário de contato
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
    // Limpar o formulário após o envio
    setName('');
    setEmail('');
    setMessage('');
    // Exibir o diálogo de sucesso
    setIsOpen(true);
  };

  return (
    <section className="h-screen">
      <h1 className="text-3xl font-extrabold py-6">Contato</h1>
      <div className=" flex flex-col justify-center items-center lg:flex-row gap-6">
        <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder='Nome Completo'
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='seuemail@mail.com'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-semibold">
              Mensagem:
            </label>
            <textarea
              id="message"
              value={message}
              placeholder='Escreva sua mensagem aqui...'
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-300  focus:outline-none focus:ring-2 focus:bg-orange-300"
          >
            Enviar
          </button>
        </form>
        <div
          className="bg-no-repeat bg-center pb-32 lg:pb-0"
        >
          <Image
            className="rounded-xl"
            src="/business.jpg"
            width={600}
            height={600}
            alt="Picture of the author"
          />

        </div>
      </div>

      {/* Diálogo de sucesso */}
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-center px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* Conteúdo do diálogo */}
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#888888" d="m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4L15.95 22ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4.35l-6.025 6.025L13.1 13.5l-4.225 4.225L11.15 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"></path></svg>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold text-gray-800"
                >
                  Mensagem enviada com sucesso!
                </Dialog.Title>
                <p className="mt-2 text-sm text-gray-600">
                  Obrigado por entrar em contato conosco. Responderemos em breve.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default Contato;
