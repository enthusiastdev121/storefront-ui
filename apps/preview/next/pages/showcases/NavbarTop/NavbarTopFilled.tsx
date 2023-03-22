import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfIconShoppingCart, VsfIconFavorite, VsfIconPerson, VsfIconMenu, VsfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import brandLogo from '@assets/vsf_logo_white.svg';
import brandLogoSign from '@assets/vsf_logo_sign_white.svg';

export default function TopNavFilled() {
  const actionItems = [
    {
      icon: <VsfIconShoppingCart />,
      ariaLabel: 'Cart',
    },
    {
      icon: <VsfIconFavorite />,
      ariaLabel: 'Wishlist',
    },
    {
      label: 'Log in',
      icon: <VsfIconPerson />,
      ariaLabel: 'Log in',
    },
  ];

  return (
    <div className="w-full h-full bg-neutral-50">
      <header className="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
        <div className="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="VSF Homepage" className="inline-block text-white">
            <img src={brandLogo.src} alt="Vsf Logo" className="hidden lg:block mr-10 w-[12.5rem] h-[1.75rem]" />
            <img src={brandLogoSign.src} alt="Vsf Logo" className="hidden w-10 h-10 mr-4 md:block lg:hidden" />
            <img src={brandLogoSign.src} alt="Vsf Logo" className="block w-8 h-8 mr-4 min-w-8 md:hidden" />
          </a>
          <VsfButton
            className="block !px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body"
            type="button"
            slotPrefix={<VsfIconMenu />}
            variant="tertiary"
          >
            <span className="hidden md:inline-flex">Categories</span>
          </VsfButton>
          <nav className="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <VsfButton
                className={classNames(
                  'mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white',
                  actionItem.label === 'Log in' ? 'lg:hidden' : null,
                )}
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
              />
            ))}
            <VsfButton
              className="hidden lg:inline-flex mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              key={actionItems[2].ariaLabel}
              aria-label={actionItems[2].ariaLabel}
              variant="tertiary"
              slotPrefix={actionItems[2].icon}
            >
              Log In
            </VsfButton>
          </nav>
        </div>
      </header>
    </div>
  );
}

// #endregion source
TopNavFilled.getLayout = ShowcasePageLayout;
