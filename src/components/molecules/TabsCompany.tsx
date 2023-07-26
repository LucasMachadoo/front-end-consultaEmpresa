'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    Recentes: [
      {
        id: 1,
        name: 'Empresa 1',
      },
      {
        id: 2,
        name: "Empresa 2",
      },
    ],
    Populares: [
      {
        id: 1,
        name: 'Is tech making coffee better or worse?',
      },
      {
        id: 2,
        name: 'The most innovative things happening in coffee',
      },
    ],
    
  })

  return (
    <section className="mt-10 w-full px-2 py-16 sm:px-0">
      
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-md md:rounded-xl lg:rounded-xl bg-blue-900/20 p-1 w-1/2">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-md md:rounded-xl lg:rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-orange-400  shadow'
                    : 'text-blue-900 hover:bg-zinc-50 /[0.2] hover:text-black'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                ' shadow-xl rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-orange-100"
                  >
                    <h3 className="text-sm font-medium leading-5 flex justify-between">
                      {post.name}
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#fb923c" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4v-1Z"></path></svg>
                      </div>
                    </h3>
                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  )
}
