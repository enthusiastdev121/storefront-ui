import {
  VsfSpacer,
  VsfNavbarTopAction,
  VsfNavbarTopActionGroup,
  VsfNavbarTop,
} from '@storefront-ui/react/components/VsfNavbarTop';
import { VsfSearch } from '@storefront-ui/react/components/VsfSearch';
import { VsfBadge } from '@storefront-ui/react/components/VsfBadge';
import {
  VsfIconShoppingCart,
  VsfIconFavorite,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconVuestorefront,
} from '@storefront-ui/react/components/VsfIcons';
import Link from 'next/link';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIconBase/types';
import classNames from 'classnames';
import VsfIconBase from '@storefront-ui/react/components/VsfIconBase/VsfIconBase';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'filled',
        propType: 'boolean',
      },
      {
        type: 'json',
        modelName: 'menuItems',
        propType: 'Array',
        propDefaultValue: '[]',
        description: 'VsfNavbarTopMenuItem prop',
      },
    ],
    {
      filled: false,
      menuItems: [
        {
          label: 'Men',
          link: '/men',
        },
        {
          label: 'Women',
          link: '/women',
        },
        {
          label: 'Kids',
          link: '/women',
        },
      ],
    },
  );
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
    <ComponentExample controls={{ state, controls }}>
      <VsfNavbarTop filled={state.get.filled}>
        <Link href="/">
          <a
            aria-label="VSF Homepage"
            className={classNames(
              'inline-block h-8 text-white md:h-10 lg:h-7',
              state.get.filled ? 'text-white' : 'text-brand',
            )}
          >
            <VsfIconBase viewBox="0 0 205 28" className="!hidden large:!block !w-[12.5rem] !h-[1.75rem]">
              <path d="M150.233 11.1347H147.583V14.2543H150.233V23.3588H153.933V14.2543H157.109V11.1347H153.933V10.4647C153.933 10.0027 154.078 9.65995 154.368 9.43642C154.657 9.21296 155.083 9.10123 155.647 9.10123C155.879 9.10067 156.112 9.11225 156.343 9.13592C156.6 9.16515 156.856 9.20761 157.109 9.26314V6.16665C156.804 6.09418 156.495 6.04018 156.184 6.00494C155.839 5.96053 155.492 5.93736 155.144 5.93555C153.56 5.93568 152.346 6.32079 151.501 7.09087C150.656 7.86116 150.233 8.96265 150.233 10.3953V11.1347Z" />
              <path d="M85.8402 20.8862L88.0331 17.9977C88.8478 18.6929 89.7552 19.2685 90.7286 19.7077C91.5601 20.0609 92.4534 20.2417 93.3553 20.2391C94.2537 20.2391 94.9581 20.1005 95.4683 19.8232C95.9782 19.546 96.2333 19.1609 96.2335 18.6679C96.2417 18.4647 96.1989 18.2628 96.109 18.0809C96.0192 17.8991 95.8852 17.7432 95.7196 17.628C95.3769 17.3817 94.8096 17.1892 94.0178 17.0503L90.5001 16.4264C89.2055 16.1953 88.208 15.6947 87.5078 14.9245C86.807 14.1542 86.4568 13.176 86.457 11.9897C86.457 10.434 87.0394 9.20544 88.2043 8.30402C89.3693 7.40293 90.9721 6.95235 93.0127 6.95229C94.2377 6.95866 95.4532 7.16947 96.6104 7.57621C97.74 7.9481 98.7956 8.51921 99.7285 9.26314L97.6498 12.1977C96.9074 11.5916 96.0797 11.1009 95.1941 10.7419C94.4106 10.437 93.5783 10.2804 92.7387 10.2799C91.9467 10.2799 91.3185 10.407 90.8541 10.6611C90.3893 10.9152 90.1571 11.2579 90.1573 11.6894C90.1496 11.8705 90.1862 12.0507 90.2639 12.2139C90.3416 12.3772 90.4581 12.5185 90.6028 12.6252C90.8999 12.8488 91.3834 13.0144 92.0534 13.1221L95.3654 13.6767C96.9035 13.9233 98.0723 14.4394 98.8719 15.2248C99.6713 16.0104 100.071 17.0272 100.071 18.275C100.071 19.9081 99.4429 21.2022 98.1865 22.1572C96.9303 23.1125 95.2209 23.5901 93.0584 23.5899C91.7509 23.5847 90.455 23.342 89.2323 22.8734C87.9955 22.4166 86.8474 21.744 85.8402 20.8862Z" />
              <path d="M44.0846 23.3588L37.6204 7.18339H41.8691L46.4147 19.2224L51.0518 7.18339H55.1405L48.5847 23.3588H44.0846Z" />
              <path d="M58.5897 11.1347V18.1596C58.573 18.4553 58.6184 18.7512 58.7227 19.028C58.827 19.3048 58.9879 19.5561 59.195 19.7656C59.402 19.975 59.6505 20.1378 59.9241 20.2434C60.1977 20.3489 60.4902 20.3947 60.7825 20.3779C61.2146 20.3863 61.6433 20.2995 62.0389 20.1237C62.3953 19.9616 62.7084 19.7161 62.9525 19.4074V11.1347H66.6531V23.3588H62.9525V22.5269C62.5006 22.8712 61.9949 23.1367 61.4564 23.3125C60.8923 23.4987 60.3024 23.5923 59.7091 23.5899C58.2928 23.5899 57.1354 23.1277 56.2369 22.2034C55.3383 21.279 54.8891 20.1005 54.8893 18.6679V11.1347H58.5897Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M77.6745 23.1508C78.5309 22.8241 79.3235 22.3469 80.0158 21.7412L77.5716 19.546C77.2724 19.8451 76.9144 20.0773 76.5208 20.2276C76.0829 20.3943 75.6181 20.4766 75.1503 20.4702C74.5002 20.4855 73.8615 20.2957 73.3228 19.9273C72.8179 19.5813 72.4215 19.0961 72.1808 18.5293H80.7924V17.6049C80.8001 16.6947 80.6453 15.7906 80.3355 14.9361C80.0555 14.1533 79.6246 13.4346 79.0679 12.8216C78.5085 12.2162 77.8307 11.7351 77.0777 11.4089C76.3246 11.0827 75.5127 10.9185 74.6936 10.9267C73.8437 10.9202 73.0011 11.0852 72.2151 11.4121C71.4679 11.7209 70.7886 12.1764 70.2164 12.7522C69.6461 13.3326 69.1923 14.0192 68.8801 14.7742C68.551 15.5598 68.3838 16.4051 68.3889 17.2583C68.3842 18.1138 68.5594 18.9606 68.9028 19.7424C69.2325 20.5019 69.7059 21.1888 70.2964 21.7643C70.8994 22.3454 71.6096 22.8008 72.3864 23.1045C73.2084 23.431 74.0845 23.5957 74.9675 23.5899C75.8882 23.6038 76.8042 23.4552 77.6745 23.1508ZM73.0489 14.4854C73.5032 14.1423 74.0581 13.9632 74.625 13.977C75.1913 13.9676 75.7437 14.1553 76.1896 14.5086C76.6441 14.8708 76.982 15.3614 77.1604 15.9181H72.1122C72.2629 15.3506 72.5916 14.8479 73.0489 14.4854Z"
              />
              <path d="M102.949 14.2543V19.6383C102.949 20.9171 103.318 21.8838 104.057 22.5384C104.796 23.1931 105.888 23.5205 107.335 23.5205C107.771 23.5139 108.206 23.4792 108.637 23.4166C109.07 23.3652 109.498 23.2762 109.916 23.1508V20.1237C109.64 20.2098 109.357 20.2754 109.071 20.3201C108.799 20.3596 108.524 20.379 108.249 20.3779C107.655 20.378 107.24 20.2663 107.004 20.0427C106.768 19.8196 106.65 19.4383 106.65 18.899V14.2543H110.03V11.1347H106.65V7.18339L102.949 7.99216V11.1347H100.505V14.2543H102.949Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M110.921 17.2583C110.917 16.4028 111.092 15.556 111.435 14.7742C111.765 14.0148 112.239 13.328 112.829 12.7522C113.431 12.1723 114.136 11.7135 114.907 11.4005C116.558 10.7382 118.396 10.7382 120.047 11.4005C120.818 11.7136 121.524 12.1723 122.126 12.7522C122.716 13.3281 123.189 14.0149 123.519 14.7742C123.858 15.5574 124.033 16.4032 124.033 17.2583C124.033 18.1134 123.858 18.9592 123.519 19.7424C123.189 20.5019 122.716 21.1887 122.126 21.7643C121.525 22.3435 120.819 22.7987 120.047 23.1045C118.393 23.7516 116.561 23.7516 114.907 23.1045C114.135 22.7988 113.429 22.3435 112.829 21.7643C112.238 21.1888 111.765 20.5019 111.435 19.7424C111.092 18.9606 110.917 18.1138 110.921 17.2583ZM117.477 20.3548C117.869 20.3613 118.257 20.2844 118.617 20.1292C118.977 19.9739 119.301 19.7437 119.567 19.4535C120.118 18.8536 120.424 18.0653 120.424 17.2467C120.424 16.4281 120.118 15.6398 119.567 15.04C119.297 14.7551 118.972 14.5284 118.613 14.3735C118.254 14.2187 117.868 14.1389 117.477 14.1389C117.087 14.1389 116.7 14.2187 116.341 14.3735C115.982 14.5284 115.657 14.7551 115.387 15.04C114.836 15.6398 114.53 16.4281 114.53 17.2467C114.53 18.0653 114.836 18.8536 115.387 19.4535C115.653 19.7437 115.977 19.9739 116.337 20.1292C116.697 20.2844 117.086 20.3613 117.477 20.3548Z"
              />
              <path d="M125.769 11.1347V23.3588L129.47 23.3588V15.5945C129.769 15.1215 130.182 14.7322 130.669 14.4623C131.161 14.1855 131.716 14.0422 132.279 14.0464C132.594 14.0459 132.908 14.0807 133.215 14.1502C133.497 14.2124 133.773 14.3014 134.038 14.416V11.1578C133.873 11.0452 133.686 10.9703 133.49 10.9383C133.21 10.8934 132.928 10.8665 132.645 10.8575C132.029 10.8488 131.419 10.9832 130.863 11.2504C130.326 11.5157 129.851 11.8938 129.47 12.3594V11.1347H125.769Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M146.259 21.7412C145.567 22.3469 144.774 22.8241 143.917 23.1508C143.047 23.4552 142.131 23.6038 141.21 23.5899C140.327 23.5957 139.451 23.4309 138.629 23.1045C137.853 22.8007 137.142 22.3454 136.539 21.7644C135.949 21.1887 135.475 20.5019 135.146 19.7424C134.802 18.9606 134.627 18.1138 134.632 17.2583C134.627 16.4051 134.794 15.5597 135.123 14.7742C135.435 14.0193 135.889 13.3327 136.459 12.7523C137.031 12.1764 137.711 11.7209 138.458 11.4121C139.244 11.0852 140.086 10.9202 140.936 10.9267C141.756 10.9184 142.567 11.0826 143.32 11.4088C144.074 11.735 144.751 12.2162 145.311 12.8216C145.868 13.4345 146.299 14.1533 146.578 14.9361C146.888 15.7906 147.043 16.6947 147.035 17.6049V18.5293H138.424C138.664 19.096 139.061 19.5812 139.566 19.9273C140.104 20.2957 140.743 20.4855 141.393 20.4702C141.861 20.4766 142.326 20.3943 142.764 20.2276C143.157 20.0773 143.515 19.8451 143.815 19.546L146.259 21.7412ZM140.868 13.977C140.301 13.9633 139.746 14.1423 139.292 14.4854C138.834 14.8478 138.506 15.3506 138.355 15.9181H143.403C143.225 15.3614 142.887 14.8708 142.432 14.5086C141.986 14.1553 141.434 13.9676 140.868 13.977Z"
              />
              <path d="M158.662 23.3588V11.1347H162.362V12.3594C162.744 11.8938 163.219 11.5157 163.756 11.2504C164.312 10.9832 164.922 10.8488 165.537 10.8575C165.821 10.8665 166.103 10.8934 166.383 10.9383C166.579 10.9703 166.766 11.0452 166.931 11.1578V14.416C166.665 14.3014 166.39 14.2124 166.108 14.1502C165.801 14.0807 165.487 14.0459 165.172 14.0464C164.609 14.0422 164.054 14.1855 163.562 14.4623C163.075 14.7322 162.662 15.1215 162.362 15.5945V23.3588L158.662 23.3588Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M168.038 14.7742C167.695 15.556 167.52 16.4028 167.525 17.2583C167.52 18.1138 167.695 18.9606 168.038 19.7424C168.368 20.5019 168.842 21.1887 169.432 21.7643C170.032 22.3434 170.738 22.7987 171.511 23.1045C173.164 23.7516 174.997 23.7516 176.65 23.1045C177.423 22.7986 178.129 22.3434 178.729 21.7643C179.319 21.1886 179.792 20.5018 180.122 19.7424C180.461 18.9592 180.636 18.1134 180.636 17.2583C180.636 16.4032 180.461 15.5574 180.122 14.7742C179.792 14.015 179.319 13.3282 178.729 12.7522C178.127 12.1724 177.422 11.7137 176.65 11.4005C175 10.7382 173.161 10.7382 171.511 11.4005C170.739 11.7136 170.034 12.1723 169.432 12.7522C168.842 13.3281 168.368 14.0149 168.038 14.7742ZM175.22 20.1292C174.86 20.2845 174.472 20.3613 174.08 20.3548C173.689 20.3613 173.301 20.2845 172.941 20.1292C172.581 19.9739 172.257 19.7437 171.991 19.4535C171.44 18.8536 171.134 18.0653 171.134 17.2467C171.134 16.4281 171.44 15.6398 171.991 15.04C172.261 14.7551 172.585 14.5284 172.945 14.3735C173.304 14.2187 173.69 14.1389 174.081 14.1389C174.471 14.1389 174.857 14.2187 175.216 14.3735C175.576 14.5284 175.9 14.7551 176.171 15.04C176.721 15.6398 177.027 16.4281 177.027 17.2467C177.027 18.0653 176.721 18.8536 176.171 19.4535C175.904 19.7437 175.58 19.9739 175.22 20.1292Z"
              />
              <path d="M182.372 11.1347H186.073V11.9666C186.525 11.6223 187.03 11.3568 187.569 11.181C188.133 10.9948 188.723 10.9013 189.316 10.9038C190.733 10.9038 191.89 11.3659 192.788 12.2902C193.687 13.2144 194.136 14.3929 194.136 15.8256V23.3587H190.435V16.3341C190.452 16.0383 190.407 15.7424 190.303 15.4656C190.198 15.1889 190.037 14.9375 189.83 14.7281C189.623 14.5186 189.375 14.3558 189.101 14.2503C188.828 14.1447 188.535 14.0989 188.243 14.1157C187.811 14.1075 187.382 14.1941 186.986 14.3698C186.63 14.5322 186.317 14.7777 186.073 15.0862V23.3587L182.372 23.3587V11.1347Z" />
              <path d="M197.586 14.2543V19.6383C197.585 20.9171 197.955 21.8838 198.693 22.5384C199.431 23.1931 200.524 23.5205 201.971 23.5205C202.407 23.5139 202.842 23.4792 203.273 23.4166C203.706 23.3651 204.134 23.2762 204.552 23.1508V20.1237C204.276 20.2098 203.993 20.2755 203.707 20.3201C203.435 20.3597 203.16 20.379 202.885 20.3779C202.291 20.378 201.876 20.2662 201.64 20.0427C201.404 19.8196 201.286 19.4383 201.286 18.899V14.2543H204.667V11.1347H201.286V7.18338L197.586 7.99215V11.1347H195.141V14.2543H197.586Z" />
              <path d="M12.458 0.942279C12.211 1.09763 11.9687 1.34278 11.484 1.83308C10.9994 2.32332 10.757 2.56855 10.6034 2.81836C10.0952 3.64524 10.0952 4.69237 10.6034 5.51924C10.757 5.76902 10.9993 6.01412 11.4837 6.50423L11.484 6.50447C11.9686 6.99477 12.211 7.23997 12.458 7.39533C13.2754 7.90951 14.3105 7.90952 15.1279 7.39533C15.3748 7.23997 15.6172 6.99482 16.1019 6.50452C16.5865 6.01422 16.8289 5.76907 16.9824 5.51924C17.4907 4.69237 17.4907 3.64524 16.9824 2.81836C16.8289 2.56853 16.5865 2.32339 16.1019 1.8331C15.6172 1.3428 15.3748 1.09763 15.1279 0.942279C14.3105 0.428098 13.2754 0.428091 12.458 0.942279Z" />
              <path d="M15.6467 16.2813L21.2863 10.5763C21.52 10.3399 21.7974 10.1524 22.1027 10.0245C22.4079 9.89655 22.7351 9.8307 23.0656 9.8307C23.396 9.8307 23.7232 9.89654 24.0285 10.0245C24.3338 10.1524 24.6112 10.3399 24.8448 10.5762L27.6787 13.443C27.6616 13.4602 13.8393 27.443 13.8393 27.443L0 13.443C0.0375462 13.4051 1.56976 11.8551 2.86368 10.5461C3.0972 10.3099 3.37445 10.1224 3.67958 9.99459C3.98472 9.86673 4.31176 9.80094 4.64204 9.80096C4.97232 9.80099 5.29935 9.86684 5.60447 9.99474C5.90958 10.1227 6.1868 10.3101 6.42029 10.5464L12.0896 16.2816C12.3232 16.5178 12.6005 16.7053 12.9057 16.8331C13.2109 16.961 13.5379 17.0268 13.8682 17.0267C14.1986 17.0267 14.5256 16.9609 14.8308 16.833C15.1359 16.7051 15.4132 16.5176 15.6467 16.2813Z" />
            </VsfIconBase>
            <VsfIconVuestorefront size={VsfIconSize.xl} className="!hidden medium:!block large:!hidden" />
            <VsfIconVuestorefront size={VsfIconSize.lg} className="block medium:!hidden" />
          </a>
        </Link>
        <VsfNavbarTopActionGroup className="hidden lg:block">
          {state.get.menuItems.map((menuItem) => (
            <Link href={menuItem.link} key={menuItem.label}>
              <VsfNavbarTopAction tag="a">{menuItem.label}</VsfNavbarTopAction>
            </Link>
          ))}
        </VsfNavbarTopActionGroup>
        <VsfNavbarTopAction tag="a" slotIcon={<VsfIconMenu />} className="block lg:hidden">
          Menu
        </VsfNavbarTopAction>
        <VsfSpacer className="block md:hidden" />
        <VsfSearch placeholder="Search" className="flex-1 hidden md:block" />
        <VsfNavbarTopActionGroup>
          {actionItems.map((actionItem) =>
            actionItem.label !== 'Log in' ? (
              <VsfNavbarTopAction key={actionItem.ariaLabel} icon ariaLabel={actionItem.ariaLabel}>
                <VsfBadge dot value={1} className={state.get.filled ? 'bg-white' : 'bg-secondary-500'}>
                  {actionItem.icon}
                </VsfBadge>
              </VsfNavbarTopAction>
            ) : (
              <VsfNavbarTopAction key={actionItem.ariaLabel} icon ariaLabel={actionItem.ariaLabel}>
                {actionItem.icon}
              </VsfNavbarTopAction>
            ),
          )}
        </VsfNavbarTopActionGroup>
      </VsfNavbarTop>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
