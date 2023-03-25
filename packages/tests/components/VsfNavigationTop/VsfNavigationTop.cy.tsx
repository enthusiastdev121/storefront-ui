/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { ref } from "vue";
import type { Ref } from "vue";
import { mount, useComponent, Wrapper } from '../../utils/mount';

const { vue: VsfNavigationTopVue, react: VsfNavigationTopReact } = useComponent('VsfNavigationTop');
import VsfNavigationTopBaseObject from "./VsfNavigationTop.PageObject";
import { VsfNavigationTopVariant } from "../../../sfui/frameworks/react/components/VsfNavigationTop/types";

describe("VsfNavigationTop", () => {
  const page = () => new VsfNavigationTopBaseObject("navigation-top");

  const initializeComponent = ({
    modelValue = ref(false),
    variant,
    slotCloseButton = ref()
  }: {
    modelValue?: Ref<boolean>;
    variant?: VsfNavigationTopVariant,
    slotCloseButton?: Ref<string | undefined>
  }) => {
    return mount({
      vue: {
        component: VsfNavigationTopVue,
        props: {
          modelValue,
          variant,
          'onUpdate:modelValue': (e: boolean) => modelValue.value = e
        },
        slots: {
          default: `<div>Column 1 longer text</div><div>Column 2</div><div>Column 3</div><div>Column 4</div>`,
          buttonClose: () => slotCloseButton?.value
       }
      },
      react: <Wrapper
        open={modelValue}
        variant={variant}
        onOpenChange={e => modelValue.value = e}
        slotButtonClose={slotCloseButton}
        component={VsfNavigationTopReact}
      >
        <div>Column 1 longer text</div><div>Column 2</div><div>Column 3</div><div>Column 4</div>
      </Wrapper>
    });
  }

  beforeEach(() => {
    cy.viewport(800, 200);
  })

  it('initial state', () => {
    initializeComponent({});

    page().isNotVisible();
  });

  describe('when opened and click close button', () => {
    it('should modelValue = false and notBeVisible', () => {
      const modelValue = ref(true);
      initializeComponent({modelValue});

      page()
        .isVisible()
        .clickCloseButton();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
      });
    });
  });

  describe('when opened and click outside navigation', () => {
    it('should modelValue = false and notBeVisible', () => {
      const modelValue = ref(true);
      initializeComponent({modelValue});

      page()
        .isVisible()
        .clickOutside()
        .isNotVisible();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(VsfNavigationTopVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({modelValue: ref(true), variant: componentVariant});

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when close button slot is filled ', () => {
    it('should change content of close button', () => {
      const modelValue = ref(true);
      const slotCloseButton = ref();
      initializeComponent({modelValue, slotCloseButton });

      page().closeButtonHasIcon();
      cy.then(() => {
        slotCloseButton.value = 'someText';
      }).then(() => {
        page().closeButtonHasText('someText')
      })
    });
  });
});
