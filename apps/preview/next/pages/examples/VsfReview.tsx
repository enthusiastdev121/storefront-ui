import { VsfReview, VsfReviewProps } from '@storefront-ui/react/components/VsfReview';
import { VsfRating } from '@storefront-ui/react/components/VsfRating';
import { VsfTag } from '@storefront-ui/react/components/VsfTag';
import { VsfTagSize, VsfTagVariant } from '@storefront-ui/react/components/VsfTag/types';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIcons/types';
import { VsfIconCheck } from '@storefront-ui/react/components/VsfIcons';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const slotAuthorSuffixOptions = createControlsOptions({
  none: undefined,
  Tag: (
    <VsfTag size={VsfTagSize.sm} variant={VsfTagVariant.primary} label="Verified purchaser">
      <VsfIconCheck size={VsfIconSize.xs} />
    </VsfTag>
  ),
});

interface ReviewControls extends Omit<VsfReviewProps, 'slotAuthorSuffix'> {
  slotAuthorSuffix: typeof slotAuthorSuffixOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<ReviewControls>(
    [
      {
        type: 'text',
        modelName: 'title',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        type: 'text',
        modelName: 'content',
        propDefaultValue: '',
        propType: 'string',
        isRequired: true,
      },
      {
        type: 'text',
        modelName: 'date',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'author',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'charLimit',
        propDefaultValue: '',
        propType: 'number',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'showMoreText',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'text',
        modelName: 'showLessText',
        propDefaultValue: '',
        propType: 'string',
        isRequired: false,
      },
      {
        type: 'select',
        modelName: 'slotAuthorSuffix',
        propType: 'ReactNode',
        options: slotAuthorSuffixOptions.controlsOptions,
      },
    ],
    {
      title: 'Lorem Ipsum is simply dummy text',
      // eslint-disable-next-line no-irregular-whitespace
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.`,
      date: '16 days ago',
      author: 'John Doe',
      charLimit: 700,
      showMoreText: 'Read more',
      showLessText: 'Read less',
      slotAuthorSuffix: slotAuthorSuffixOptions.defaultOption,
    },
  );
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfReview
        title={state.get.title}
        date={state.get.date}
        author={state.get.author}
        content={state.get.content}
        charLimit={state.get.charLimit}
        showMoreText={state.get.showMoreText}
        showLessText={state.get.showLessText}
        slotRating={<VsfRating value={3} max={5} />}
        slotAuthorSuffix={slotAuthorSuffixOptions.getValue(state.get.slotAuthorSuffix)}
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
