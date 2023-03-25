import { VsfRating, VsfRatingVariants, VsfRatingSizes } from '@storefront-ui/react/components/VsfRating';
import type { VsfRatingProps } from '@storefront-ui/react/components/VsfRating/types';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<VsfRatingProps>(
    [
      {
        type: 'range',
        modelName: 'value',
        propDefaultValue: 0,
        propType: 'number',
        options: [
          {
            bind: {
              min: 0,
              max: 10,
              step: 0.1,
            },
          },
        ],
      },
      {
        type: 'range',
        modelName: 'max',
        propDefaultValue: 5,
        propType: 'number',
        options: [
          {
            bind: {
              min: 1,
              step: 1,
              max: 10,
            },
          },
        ],
      },
      {
        type: 'boolean',
        modelName: 'halfIncrement',
        propType: 'boolean',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfRatingSizes),
        propDefaultValue: VsfRatingSizes.base,
        propType: 'VsfRatingSizes',
      },
      {
        type: 'select',
        modelName: 'variant',
        options: Object.keys(VsfRatingVariants),
        propDefaultValue: VsfRatingVariants.base,
        propType: 'VsfRatingVariants',
      },
    ],
    {
      value: 3,
      max: 5,
      size: VsfRatingSizes.base,
      variant: VsfRatingVariants.base,
      halfIncrement: false,
    },
  );
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfRating
        value={state.get.value}
        max={state.get.max}
        size={state.get.size}
        variant={state.get.variant}
        halfIncrement={state.get.halfIncrement}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
