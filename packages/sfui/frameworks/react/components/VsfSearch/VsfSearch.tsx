import type { SyntheticEvent, MouseEvent } from 'react';
import classNames from 'classnames';
import { VsfIconCancel } from '../VsfIcons';
import { VsfButton } from '../VsfButton';

import type { VsfSearchProps } from './types';

export default function VsfSearch({
  className,
  disabled,
  name = 'search',
  onInput,
  onReset,
  onSubmit,
  placeholder,
  slotPrefix,
  slotResults,
  slotSubmit,
  slotSuffix,
  value,
  inputProps,
  ...attributes
}: VsfSearchProps) {
  function onResetHandler(event: MouseEvent) {
    event?.preventDefault();
    onReset?.(event);
  }

  function onInputHandler(event: SyntheticEvent<HTMLInputElement>) {
    event.stopPropagation();
    onInput?.(event);
  }

  const classes = classNames(
    'vsf-search',
    {
      'vsf-search--disabled': disabled,
    },
    className,
  );

  return (
    <div className={classes} {...attributes}>
      <form role="search" className="vsf-search__form" onSubmit={onSubmit}>
        <div className="vsf-search__input-wrapper group">
          {slotPrefix && <span className="vsf-search__input-prefix">{slotPrefix}</span>}

          <input
            {...inputProps}
            type="search"
            name={name}
            placeholder={placeholder}
            value={value}
            onInput={onInputHandler}
            className="vsf-search__input peer"
            disabled={disabled}
          />

          <span className="vsf-search__input-reset">
            <button
              type="reset"
              className="vsf-search__input-reset-button"
              onClick={onResetHandler}
              disabled={disabled}
            >
              <VsfIconCancel />
            </button>
          </span>

          {slotSuffix && <span className="vsf-search__input-suffix">{slotSuffix}</span>}
        </div>

        {slotSubmit && (
          <VsfButton type="submit" className="vsf-search__submit" tile disabled={disabled}>
            {slotSubmit}
          </VsfButton>
        )}
      </form>

      <div className="vsf-search__results">{slotResults}</div>
    </div>
  );
}
