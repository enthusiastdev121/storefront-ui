import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import classNames from 'classnames';
import { SfAccordionItem } from '@storefront-ui/react';

const accordionItems = [
  {
    id: 'acc-1',
    summary: 'One',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'acc-2',
    summary: 'Two',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 'acc-3',
    summary: 'Three',
    details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function CollapsableAccordion() {
  const [active, setActive] = useState<string | null>(null);

  const isOpen = (id: string) => id === active;

  const handleToggle = (id: string) => (open: boolean) => {
    if (open) {
      setActive(id);
    } else if (isOpen(id)) {
      setActive(null);
    }
  };

  return (
    <div className="border rounded divide-y">
      {accordionItems.map(({ id, summary, details }) => (
        <SfAccordionItem
          key={id}
          summary={<p className="p-2">{summary}</p>}
          onToggle={handleToggle(id)}
          open={isOpen(id)}
          className={classNames({ 'bg-gray-100': isOpen(id) })}
        >
          <p className="p-2">{details}</p>
        </SfAccordionItem>
      ))}
    </div>
  );
}

// #endregion source

CollapsableAccordion.getLayout = ShowcasePageLayout;
