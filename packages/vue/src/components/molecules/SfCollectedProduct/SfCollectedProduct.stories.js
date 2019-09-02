// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfCollectedProduct from "./SfCollectedProduct.vue";
// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$collected-product-card-box-shadow",
      "0px 4px 35px rgba(168, 172, 176, 0.19)",
      "Shadow effect on collected product"
    ]
  ]
};

const data = () => {
  return {
    image:
      "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
    title: "Product name",
    regularPrice: 12.99,
    specialPrice: 1.99
  };
};

storiesOf("Molecules|CollectedProduct", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      props: {
        image: {
          default: text("image (prop)", "assets/storybook/product_thumb.png")
        },
        title: {
          default: text("title (prop)", "Product name")
        },
        regularPrice: {
          default: text("regularPrice (prop)", "$10,99")
        },
        specialPrice: {
          default: text("specialPrice (prop)", "$5,99")
        }
      },
      data,
      components: { SfCollectedProduct },
      template: `    <SfCollectedProduct
      :image="image"
      :title="title"
      :specialPrice="specialPrice"
      :regularPrice="regularPrice"/>`
    }),
    {
      info: {
        summary: `
        <p>Component for rendering Collected Product.</p>
        <h2> Usage </h2>
        <pre><code>import { SfCollectedProduct } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS Variables")}`
      }
    }
  )
  .add("[slot] configuration")
  .add("[slot] actions");
