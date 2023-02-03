import { useState, ChangeEvent } from 'react';
import { VsfListItemMenu } from '../VsfListItemMenu';
import type { VsfListItemFilterSwitchProps, ItemSwitchProps } from './types';
import { VsfListItemFilterSwitchVariant } from './types';
import { VsfSwitch } from '../VsfSwitch';

function ItemSwitch({ value, disabled, name, onChange }: ItemSwitchProps) {
  return <VsfSwitch value={value} labelTag="span" disabled={disabled} name={name} onChange={onChange} />;
}

export default function VsfListItemFilterSwitch({
  label,
  counter,
  size,
  variant = VsfListItemFilterSwitchVariant.left,
  secondaryText,
  disabled,
  className,
  truncate,
  value,
  name,
  children,
  defaultValue = false,
  onChange = () => '',
  ...attributes
}: VsfListItemFilterSwitchProps): JSX.Element {
  const [selected, setSelected] = useState(defaultValue);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setSelected(event.target.checked);
    onChange(event);
  }

  return (
    <li className="list-item-filter-switch" data-testid="list-item-filter-switch">
      <VsfListItemMenu
        tag="label"
        label={label}
        counter={counter}
        size={size}
        selected={selected}
        className={className}
        secondaryText={secondaryText}
        disabled={disabled}
        truncate={truncate}
        slotPrefix={
          variant === VsfListItemFilterSwitchVariant.left && (
            <ItemSwitch value={value} disabled={disabled} name={name} onChange={handleOnChange} />
          )
        }
        slotSuffix={
          variant === VsfListItemFilterSwitchVariant.right && (
            <ItemSwitch value={value} disabled={disabled} name={name} onChange={handleOnChange} />
          )
        }
        {...attributes}
      >
        {children}
      </VsfListItemMenu>
    </li>
  );
}
