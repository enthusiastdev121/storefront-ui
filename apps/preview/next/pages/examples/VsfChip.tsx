import { VsfChip, VsfChipSize } from '@storefront-ui/react/components/VsfChip';
import { VsfThumbnail, VsfThumbnailSize } from '@storefront-ui/react/components/VsfThumbnail/index';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'label',
        propType: 'string',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfChipSize),
        propDefaultValue: VsfChipSize.base,
        propType: 'VsfChipSize',
      },
      {
        type: 'boolean',
        modelName: 'selected',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'value',
        propType: 'string',
        description: 'Sets value of the input checkbox element',
      },
      {
        type: 'boolean',
        modelName: 'deletable',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'slotPrefix',
        propType: 'boolean',
        description: 'Shows example of prefix slot content. Only for demonstration purposes',
      },
    ],
    {
      size: VsfChipSize.base,
      disabled: false,
      selected: false,
      deletable: false,
      label: 'Label',
      slotPrefix: false,
      value: '',
    },
  );

  const selectHandler = () => {
    state.set((currentState) => ({
      ...currentState,
      selected: !currentState.selected,
    }));
    // eslint-disable-next-line no-console
    console.log('changed!');
  };
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfChip
        disabled={state.get.disabled}
        deletable={state.get.deletable}
        size={state.get.size}
        label={state.get.label}
        value={state.get.value}
        selected={state.get.selected}
        // eslint-disable-next-line no-console
        onSelected={selectHandler}
        className="mr-2"
        slotPrefix={
          state.get.slotPrefix ? (
            <VsfThumbnail
              className="bg-gray-500"
              size={state.get.size === VsfChipSize.sm ? VsfThumbnailSize.sm : VsfThumbnailSize.base}
            />
          ) : null
        }
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
