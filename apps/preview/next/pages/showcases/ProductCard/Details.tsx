import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfRating,
  SfButton,
  SfLink,
  SfCounter,
  SfIconShoppingCart,
  SfIconCompareArrows,
  SfIconFavorite,
  SfIconSell,
  SfIconPackage,
  SfIconWarehouse,
  SfIconSafetyCheck,
} from '@storefront-ui/react';

export default function ProductDetails() {
  return (
    <section className="md:max-w-[640px]">
      <div className="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-2 mb-2">
        <SfIconSell size="sm" className="mr-1.5" />
        Sale
      </div>
      <h1 className="font-bold typography-headline-3">Athletic Mens Walking Sneakers Athletic Shoes Breathable Knit</h1>
      <div className="flex items-baseline py-2">
        <strong className="font-bold typography-headline-3 text-secondary-600">$2,345.99</strong>
        <span className="ml-2 text-base font-normal leading-4 line-through text-neutral-500">$3,129.99</span>
      </div>
      <div className="inline-flex items-end mb-2">
        <SfRating size="xs" value={3} max={5} />
        <SfCounter className="ml-1" size="xs">
          123
        </SfCounter>
        <SfLink href="#" variant="secondary" className="ml-2 text-xs">
          123 reviews
        </SfLink>
      </div>
      <div className="mb-4 text-sm">
        <p>Stretch mesh upper for breathability. Lightweight.</p>
        <p> Non slip.</p> <p>Flexible outsole.</p>
        <p>Easy to wear on and off.</p>
      </div>
      {/* TODO: Include QuantitySelector when ready */}
      <div className="py-4 mb-4 border-gray-200 border-y">
        <SfButton type="button" size="lg" className="w-full" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add to cart
        </SfButton>
        <div className="flex justify-center mt-4">
          <SfButton type="button" size="sm" variant="tertiary" slotPrefix={<SfIconCompareArrows size="sm" />}>
            Compare
          </SfButton>
          <SfButton type="button" size="sm" variant="tertiary" slotPrefix={<SfIconFavorite size="sm" />}>
            Add to list
          </SfButton>
        </div>
      </div>
      <div className="flex first:mt-4">
        <SfIconPackage size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          Free shipping, arrives by Thu, Apr 7. Want it faster?
          <SfLink href="#" variant="secondary" className="mx-1">
            Add an address
          </SfLink>
          to see options
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconWarehouse size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          Pickup not available at your shop.
          <SfLink href="#" variant="secondary" className="ml-1">
            Check availability nearby
          </SfLink>
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconSafetyCheck size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          Free 30-days returns.
          <SfLink href="#" variant="secondary" className="ml-1">
            Details
          </SfLink>
        </p>
      </div>
    </section>
  );
}

// #endregion source
ProductDetails.getLayout = ShowcasePageLayout;
