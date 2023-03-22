/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfSwitch } from '@storefront-ui/react';
import { useState } from 'react';

export default function SwitchWithLabel() {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <>
      <label className="flex items-center">
        <VsfSwitch
          checked={checkedState}
          value="value-1"
          onChange={(event) => {
            setCheckedState(event.target.checked);
          }}
        />
        <span className="ml-3 text-base text-gray-900 cursor-pointer font-body">Label</span>
      </label>
      <span className="text-xs mt-0.5 ml-12 block text-gray-500">Help text</span>
    </>
  );
}

// #endregion source
SwitchWithLabel.getLayout = ShowcasePageLayout;
