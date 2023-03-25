import { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { VsfSearch } from '@storefront-ui/react/components/VsfSearch';
import type { VsfSearchProps } from '@storefront-ui/react/components/VsfSearch';
import { VsfIconSearch } from '@storefront-ui/react/components/VsfIcons';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function ResultsPanel() {
  return (
    <div className="bg-white top-1 relative rounded-md font-body text-base text-center p-3 shadow-md border border-gray-100">
      <p>
        This panel is not a part of&nbsp;
        <code className="text-xs rounded bg-yellow-100 border border-yellow-300 py-0.5 px-1">VsfSearch</code>
        &nbsp;component
      </p>
      <p>
        Content is injected via&nbsp;
        <code className="text-xs rounded bg-yellow-100 border border-yellow-300 py-0.5 px-1">#results</code>&nbsp;slot
      </p>
    </div>
  );
}

function Example() {
  const { state, controls } = prepareControls<VsfSearchProps>(
    [
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'disabled',
      },
      {
        type: 'boolean',
        propType: '---',
        modelName: 'slotPrefix',
        description: "Only for demonstration purposes, Icon is injected via 'prefix' slot",
      },
      {
        type: 'boolean',
        propType: '---',
        modelName: 'slotSuffix',
        description: "Only for demonstration purposes, Icon is injected via 'suffix' slot",
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'slotSubmit',
        description: "Only for demonstration purposes, Content is injected via 'submit' slot",
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'placeholder',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'name',
      },
    ],
    {
      placeholder: 'Search',
      disabled: false,
      value: '',
      name: 'q',
      slotSubmit: 'search',
      slotPrefix: false,
      slotSuffix: false,
    },
  );
  function submitHandler(e: FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Search Submit: ', e);
  }
  function resetHandler(e: MouseEvent) {
    state.set({ ...state.get, value: '' });
    // eslint-disable-next-line no-console
    console.log('Search Reset: ', e);
  }
  function onInput(event: ChangeEvent<HTMLInputElement>) {
    state.set({ ...state.get, value: event.target.value });
  }

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfSearch
        placeholder={state.get.placeholder}
        disabled={state.get.disabled}
        name={state.get.name}
        value={state.get.value}
        slotPrefix={state.get.slotPrefix ? <VsfIconSearch /> : null}
        slotSuffix={state.get.slotSuffix ? <VsfIconSearch /> : null}
        slotSubmit={state.get.slotSubmit}
        slotResults={<ResultsPanel />}
        onInput={onInput}
        onSubmit={submitHandler}
        onReset={resetHandler}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
