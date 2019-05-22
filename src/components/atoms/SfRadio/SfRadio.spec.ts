import { shallowMount } from "@vue/test-utils";
import SfRadio from "./SfRadio.vue";
const options = [
  { label: "Apple", value: "apple", price: "1" },
  { label: "Orange", value: "orange", price: "2" },
  { label: "Banana", value: "banana" }
]
let value = 'orange'

describe("SfRadio.vue", () => {

  it("renders a component", () => {
    const component = shallowMount(SfRadio);
    expect(component.contains(".sf-radio")).toBe(true);
  });

  it("renders a component with options", () => {
    const component = shallowMount(SfRadio, {
      propsData: {
        options,
        value
      }
    });
    expect(component.findAll(".sf-radio__container").length).toBe(options.length)
  });


  it("renders a component with selected option", () => {
    const component = shallowMount(SfRadio, {
      propsData: {
        options,
        value
      }
    });
    expect(component.contains(".sf-radio--checked")).toBe(true)
  });

  it("renders a component with button slot", () => {
    const component = shallowMount(SfRadio, {
      propsData: {
        options: [{ label: "Orange", value: "orange", price: "2" }],
        value
      },
      scopedSlots: {
        button: `<button class="custom-button" slot-scope="{ isActive }">{{ isActive }}</button>`
      }
    });
    expect(component.contains(".custom-button")).toBe(true);
    expect(component.contains(".sf-radio__checkmark")).toBe(false);
    expect(component.find(".custom-button").text()).toMatch("true");
  });

  it("renders a component with content slot", () => {
    const component = shallowMount(SfRadio, {
      propsData: {
        options: [{ label: "Orange", value: "orange", price: "2" }],
        value
      },
      scopedSlots: {
        content: `<div class="custom-content" slot-scope="{ option }">{{ option.label }}</div>`
      }
    });
    expect(component.contains(".custom-content")).toBe(true);
    expect(component.contains(".sf-radio__label")).toBe(false);
    expect(component.find(".custom-content").text()).toMatch("Orange");
  });

  it("renders a component with css modifier", () => {
    const component = shallowMount(SfRadio, {
      propsData: {
        options,
        value
      },
      attrs: {
        class: 'sf-radio--align-top'
      }
    });
    expect(component.contains(".sf-radio--align-top")).toBe(true)
  });

});
