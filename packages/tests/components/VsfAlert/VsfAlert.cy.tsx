/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { ref, unref } from 'vue';
import type { Ref } from 'vue';
import type { MaybeRef } from '@vueuse/core';
import { VsfAlertType, VsfAlertVariant } from '@storefront-ui/shared';
import { mount, useComponent, Wrapper } from '../../utils/mount';

const { vue: VsfAlertVue, react: VsfAlertReact } = useComponent('VsfAlert');
const { vue: VsfButtonVue, react: VsfButtonReact } = useComponent('VsfButton');
const { vue: VsfIconCheckCircleVue, react: VsfIconCheckCircleReact } = useComponent('VsfIconCheckCircle');
import VsfAlertBaseObject from './VsfAlert.PageObject';
import { waitForRerender } from '../../utils/waitForRerender';

describe('VsfAlert', () => {
  const headerExampleText = 'alert header';
  const contentExampleText = 'this is some alert content';

  const page = () => new VsfAlertBaseObject('alert');

  const initializeComponent = ({
    modelValue = ref(true),
    variant,
    type,
    withShadow,
    hidePrefix,
    header,
    headerSlot,
    text,
    textSlot,
    fillSlotPrefix,
    fillSlotSuffix,
  }: {
    modelValue?: Ref<boolean>;
    variant?: MaybeRef<VsfAlertVariant | undefined>;
    type?: MaybeRef<VsfAlertType>;
    withShadow?: MaybeRef<boolean>;
    hidePrefix?: MaybeRef<boolean>;
    header?: MaybeRef<string>;
    headerSlot?: MaybeRef<string>;
    text?: MaybeRef<string>;
    textSlot?: MaybeRef<string>;
    fillSlotPrefix?: boolean;
    fillSlotSuffix?: boolean;
  } = {}) => {
    return mount({
      vue: {
        component: VsfAlertVue,
        global: {
          components: {
            VsfIconCheckCircleVue,
            VsfButtonVue,
          },
        },
        props: {
          modelValue,
          header,
          text,
          variant,
          type,
          withShadow,
          hidePrefix,
          'onUpdate:modelValue': (e: boolean) => (modelValue.value = e),
        },
        slots: {
          ...(textSlot && { default: () => unref(textSlot) }),
          ...(headerSlot && { header: () => unref(headerSlot) }),
          ...(fillSlotPrefix && { prefix: '<VsfIconCheckCircleVue/>' }),
          ...(fillSlotSuffix && { suffix: '<VsfButtonVue>some button</VsfButtonVue>' }),
        },
      },
      react: (
        <Wrapper
          open={modelValue}
          header={headerSlot || header}
          text={text}
          variant={variant}
          type={type}
          withShadow={withShadow}
          hidePrefix={hidePrefix}
          slotPrefix={fillSlotPrefix && <VsfIconCheckCircleReact />}
          slotSuffix={fillSlotSuffix && <VsfButtonReact>some button</VsfButtonReact>}
          propCallbackPair={{ open: 'onOpenChange' }}
          component={VsfAlertReact}
        >
          {unref(textSlot) || undefined}
        </Wrapper>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent({ modelValue: ref(false), text: contentExampleText });

    page().isClosed();
  });

  describe('when open', () => {
    it('should open/close based on passed prop', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue, header: headerExampleText, text: contentExampleText });

      page()
        .isOpened()
        .contains(contentExampleText)
        .headerContains(headerExampleText)
        .hasNoCloseButton()
        .makeSnapshot();

      cy.then(() => {
        modelValue.value = false;
        waitForRerender();
      }).then(() => {
        page().isClosed();
      });
    });

    it('should support passing data via text/header slots', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue, headerSlot: headerExampleText, textSlot: contentExampleText });

      page()
        .isOpened()
        .contains(contentExampleText)
        .headerContains(headerExampleText)
        .hasNoCloseButton()
        .makeSnapshot();
    });

    describe('when prefix slot filled', () => {
      it('should render custom icon', () => {
        const modelValue = ref(true);
        initializeComponent({ modelValue, fillSlotPrefix: true, text: contentExampleText });

        page().makeSnapshot();
      });
    });

    describe('when suffix slot filled', () => {
      it('should render custom close button', () => {
        const modelValue = ref(true);
        initializeComponent({ modelValue, fillSlotSuffix: true, text: contentExampleText });

        page().makeSnapshot();
      });
    });

    describe('when variant prop passed', () => {
      it('renders different icons & colors', () => {
        const modelValue = ref(true);
        const variant = ref<VsfAlertVariant>();
        initializeComponent({
          type: VsfAlertType.temporary,
          modelValue,
          variant,
          header: headerExampleText,
          text: contentExampleText,
        });

        Object.values(VsfAlertVariant).reduce<Cypress.Chainable<undefined>>((prevChainable, variantValue) => {
          return prevChainable
            .then(() => {
              variant.value = variantValue;
              waitForRerender();
            })
            .then(() => {
              page().isOpened().makeSnapshot();
            });
        }, cy);
      });
    });

    describe('when type = "temporary"', () => {
      it('hides close button and closes by itself after 5 seconds', () => {
        const modelValue = ref(true);
        cy.clock(null, ['setTimeout', 'clearTimeout']);
        initializeComponent({ modelValue, text: contentExampleText, type: VsfAlertType.temporary });

        page().isOpened().hasNoCloseButton();

        waitForRerender();
        cy.tick(10000);
        cy.then(() => {
          expect(modelValue.value).to.be.false;
          page().isClosed();
        });
      });
    });

    describe('when type = "persistent"', () => {
      it('should display close button that closes the alert when clicked', () => {
        const modelValue = ref(true);
        initializeComponent({ modelValue, text: contentExampleText, type: VsfAlertType.persistent });

        page().isOpened().clickCloseButton();

        cy.then(() => {
          expect(modelValue.value).to.be.false;
          page().isClosed();
        });
      });
    });
  });
});
