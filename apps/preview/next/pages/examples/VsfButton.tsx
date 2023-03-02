import { VsfButton, VsfButtonProps, VsfButtonSize, VsfButtonVariant } from '@storefront-ui/react/components/VsfButton';
import { VsfIconSearch, VsfIconLock } from '@storefront-ui/react/components/VsfIcons';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { ExamplePageLayout } from '../examples';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': <VsfIconSearch />,
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': <VsfIconLock />,
});

interface ButtonControls extends Omit<VsfButtonProps, 'slotPrefix' | 'slotSuffix'> {
  slotPrefix: typeof prefixSlotOptions.defaultOption;
  slotSuffix: typeof suffixSlotOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<ButtonControls>(
    [
      {
        type: 'text',
        modelName: 'children',
        description: 'Only for demonstration purposes. Default slot',
      },
      {
        type: 'select',
        modelName: 'slotPrefix',
        description: 'slotPrefix',
        propType: 'ReactNode',
        options: prefixSlotOptions.controlsOptions,
      },
      {
        type: 'select',
        modelName: 'slotSuffix',
        description: 'slotSuffix',
        propType: 'ReactNode',
        options: suffixSlotOptions.controlsOptions,
      },
      {
        type: 'text',
        modelName: 'as',
        description: 'Change button tag to a tag or any other tag',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfButtonVariant),
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfButtonSize),
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        description: 'Disabled state',
      },
      {
        type: 'boolean',
        modelName: 'square',
        description: 'Remove border radius',
      },
    ],
    {
      children: 'Hello',
      slotPrefix: prefixSlotOptions.defaultOption,
      slotSuffix: suffixSlotOptions.defaultOption,
      disabled: undefined,
      variant: VsfButtonVariant.primary,
      size: VsfButtonSize.base,
      square: undefined,
    },
  );

  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="space-x-2">
      <VsfButton
        size={state.get.size}
        square={state.get.square}
        variant={state.get.variant}
        disabled={state.get.disabled}
        slotPrefix={prefixSlotOptions.getValue(state.get.slotPrefix)}
        slotSuffix={suffixSlotOptions.getValue(state.get.slotSuffix)}
        className="max-w-[200px]"
      >
        {state.get.children}
      </VsfButton>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
