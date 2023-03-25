import { VsfAlert, VsfAlertTypes, VsfAlertVariants } from '@storefront-ui/react/components/VsfAlert/index';
import { VsfButton, VsfButtonVariants } from '@storefront-ui/react/components/VsfButton/index';
import { VsfIconChat } from '@storefront-ui/react/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const slotContent = ['none', 'custom slot content'] as const;

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Controls whether Alert component is open or not.',
      },
      {
        type: 'select',
        modelName: 'variant',
        propDefaultValue: VsfAlertVariants.gray,
        options: Object.keys(VsfAlertVariants),
        propType: 'VsfAlertVariants',
        description: 'Alert color variant, affect rendered icon.',
      },
      {
        type: 'select',
        modelName: 'type',
        propDefaultValue: VsfAlertTypes.temporary,
        options: Object.keys(VsfAlertTypes),
        propType: 'VsfAlertTypes',
        description: 'Shows/hides close button',
      },
      {
        type: 'text',
        modelName: 'text',
        propType: 'string',
        description: "Alert header text used unless VsfAlerts' children are provided.",
      },
      {
        type: 'text',
        modelName: 'header',
        propType: 'string',
        description:
          'Alert header displayed on top `text` paragraph. To customize it - pass in ReactElement instead of a string.',
      },
      {
        type: 'boolean',
        modelName: 'withShadow',
        propType: 'boolean',
        propDefaultValue: 'false',
        description: 'Shows notification shadow',
      },
      {
        type: 'boolean',
        modelName: 'hidePrefix',
        propType: 'boolean',
        propDefaultValue: 'false',
        description:
          'Shows prefix content (which defaults to variant icon). Gets styled with proper icon color based on variant prop.',
      },
      {
        type: 'select',
        modelName: 'slotPrefix',
        options: slotContent,
        propType: 'ReactNode',
        description: 'Content that replaces the default prefix icon.',
      },
      {
        type: 'select',
        modelName: 'slotSuffix',
        options: slotContent,
        propType: 'ReactNode',
        description: 'Content that replaces the default suffix close button.',
      },
    ],
    {
      open: true,
      variant: undefined,
      type: VsfAlertTypes.persistent,
      text: 'Informative text',
      header: 'Header',
      withShadow: undefined,
      hidePrefix: undefined,
      slotPrefix: slotContent[0],
      slotSuffix: slotContent[0],
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfAlert
        open={state.get.open}
        onOpenChange={(open) => state.set({ ...state.get, open })}
        variant={state.get.variant}
        type={state.get.type}
        text={state.get.text}
        header={state.get.header}
        withShadow={state.get.withShadow}
        hidePrefix={state.get.hidePrefix}
        slotPrefix={state.get.slotPrefix !== 'none' && <VsfIconChat />}
        slotSuffix={
          state.get.slotSuffix !== 'none' && (
            <VsfButton onClick={() => state.set({ ...state.get, open: false })} variant={VsfButtonVariants.tertiary}>
              Button
            </VsfButton>
          )
        }
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
