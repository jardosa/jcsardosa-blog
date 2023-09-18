import { Disclosure, Transition } from '@headlessui/react'
import { PropsWithChildren } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import classnames from 'classnames'

/* eslint-disable-next-line */
export type AccordionProps = PropsWithChildren & {
  expanded?: boolean
  label: string
}

const Accordion: React.FC<AccordionProps> = ({ expanded, label, children }) => {
  return (
    <Disclosure defaultOpen={expanded}>
      <Disclosure.Button className='text-ui-blue-500'>
        {({ open }) => (
          <div className={classnames(
            'flex items-center gap-1',

          )}>
            <ChevronRightIcon className={classnames('w-5 h-5', open && 'rotate-90 duration-200',
              !open && 'rotate-0 duration-200')} />
            <div>{label}</div>
          </div>
        )}
      </Disclosure.Button>
      <Transition
        enter="transition-all duration-300"
        enterFrom="transform -translate-y-1 opacity-0 "
        enterTo="opacity-100"
        leave="transition-all duration-300"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-1 opacity-0"
      >
        <Disclosure.Panel>
          {children}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}

export default Accordion;
