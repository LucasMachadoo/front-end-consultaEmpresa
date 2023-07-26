'use client'
import { Disclosure } from '@headlessui/react';

const listFaq = [
  {
    id: 1,
    question: 'question 1',
    answer: 'answer 1',
  },
  {
    id: 2,
    question: 'question 2',
    answer: 'answer 2',
  },
  {
    id: 3,
    question: 'question 3',
    answer: 'answer 3',
  },
  {
    id: 4,
    question: 'question 4',
    answer: 'answer 4',
  },
  {
    id: 5,
    question: 'question 5',
    answer: 'answer 5',
  },
  // Adicione os outros itens da lista aqui
];

export default function Faq() {
  return (
    <section className="w-full h-auto space-y-6 py-4">
      <h2 className="text-center text-4xl font-bold">Perguntas Frequentes</h2>
      <div className="w-full rounded-2xl bg-white p-2 shadow-xl">
        {listFaq.map((faqItem) => (
          <Disclosure key={faqItem.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black-200 hover:bg-orange-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-2">
                  <span>{faqItem.question}</span>
                  <span
                    className={`${
                      open ? 'rotate-90 transform' : ''
                    } h-5 w-5 text-purple-500`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fb923c"
                        d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                      ></path>
                    </svg>
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {faqItem.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
