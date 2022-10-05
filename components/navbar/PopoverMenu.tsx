import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Fragment } from "react"

const items = [
  {
    name: 'Dashboard',
    href: '/',
    icon: "bi-grid-1x2-fill",
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: "bi-person-fill",
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: "bi-gear-wide",
  },
]

export default function PopoverMenu() {
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center py-2 text-base font-medium text-white hover:text-opacity-100 outline-none`}>
              <h5 className="text-colorWhite_DM dark:text-colorWhite">
                Oreol Noumodong
              </h5>
              <ChevronDownIcon
                className={`${
                  open ? "rotate-180" : ""
                } h-5 w-5 text-colorWhite_DM dark:text-colorWhite transition duration-150 ease-in-out group-hover:text-opacity-80 ml-1`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute right-[10px] z-10 mt-3 px-4 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black dark:ring-colorGrayLight/25 ring-opacity-5">
                  <div className="relative flex flex-col gap-8 bg-colorWhite dark:bg-colorWhite_DM p-7">
                    {items.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className="-m-3 flex items-center rounded-lg cursor-pointer py-3 px-4 transition duration-150 ease-in-out hover:bg-colorLight dark:hover:bg-colorLight_DM outline-none">
                          <div className="flex items-center justify-center text-colorGrayLight sm:h-6 sm:w-6">
                            <i className={`bi text-md ${item.icon}`}></i>                          
                            </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-colorGrayLight">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}