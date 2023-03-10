import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

type DropwdownProps = {
  value: string,
  onChange: (v: string) => void
}

const regions = ["All Regions", "Africa", "America", "Asia", "Europe", "Oceania"]

export default function Dropdown({value, onChange}: DropwdownProps) {
  return (
    <div className="w-52 font-[600]">
      <Listbox defaultValue={regions[0]} onChange={(e: string) => onChange(e)}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-dark-blue-elements dark:text-white py-4 pl-7 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-dark-blue-elements py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {regions.map((region, regionIdx) => (
                <Listbox.Option
                  key={regionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-7 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900 dark:text-white'
                    }`
                  }
                  
                  value={region}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-[700]' : 'font-[600]'
                        }`}
                      >
                        {region}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
