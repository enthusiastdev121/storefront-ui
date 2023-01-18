import { VsfRadioGroupDirection } from '@storefront-ui/react/components/VsfRadio/types';
import { VsfRadio, VsfRadioGroup } from '@storefront-ui/react/components/VsfRadio';
import type { ChangeEvent } from 'react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const radioData = [
    {
      name: 'radio',
      label: 'Radio 1',
      value: 'radio 1',
      helpText: 'Help text',
    },
    {
      name: 'radio',
      label: 'Radio 2',
      value: 'radio 2',
      helpText: '',
    },
  ];
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'selectedValue',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'legend',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'select',
        options: Object.keys(VsfRadioGroupDirection),
        modelName: 'direction',
        propType: 'VsfRadioGroupDirection',
        propDefaultValue: VsfRadioGroupDirection.vertical,
      },
      {
        type: 'boolean',
        modelName: 'required',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'invalid',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'helpText',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'errorText',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'text',
        modelName: 'requiredText',
        propType: 'string',
        propDefaultValue: '',
      },
      {
        type: 'json',
        modelName: 'radioDataModel',
        propType: '[]',
        propDefaultValue: '[]',
      },
    ],
    {
      legend: '',
      required: false,
      invalid: false,
      helpText: '',
      requiredText: '',
      errorText: 'Error message',
      direction: VsfRadioGroupDirection.vertical,
      radioDataModel: radioData,
      selectedValue: '',
      radioGroupModelValue: '',
    },
  );
  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    state.set({
      ...state.get,
      selectedValue: event.target.value,
    });
  }
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfRadioGroup
        legend={state.get.legend}
        direction={state.get.direction}
        required={state.get.required}
        invalid={state.get.invalid}
        helpText={state.get.helpText}
        requiredText={state.get.requiredText}
        errorText={state.get.errorText}
      >
        {state.get.radioDataModel.map((radio) => (
          <VsfRadio
            key={radio.value}
            name={radio.name}
            label={radio.label}
            value={radio.value}
            helpText={radio.helpText}
            required={state.get.required}
            className="mb-4 mr-6"
            onChange={onChangeHandler}
          />
        ))}
      </VsfRadioGroup>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
