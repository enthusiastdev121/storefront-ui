import type { SfIconProps } from '@storefront-ui/react';
import { SfIconBase, SfIconSize } from '@storefront-ui/react';

export default function SfIconReact({ size = SfIconSize.base, viewBox = '0 0 24 24', ...attributes }: SfIconProps) {
  return (
    <SfIconBase size={size} viewBox={viewBox} data-testid="react" {...attributes}>
      <>
        <path d="M13.96 11.952c0 1.099-.877 1.99-1.96 1.99s-1.96-.891-1.96-1.99c0-1.098.877-1.989 1.96-1.989s1.96.89 1.96 1.99" />
        <path
          fillRule="evenodd"
          d="M12 4.467a14.594 14.594 0 0 0-.958-.868c-.818-.674-1.63-1.17-2.388-1.418-.758-.25-1.516-.266-2.154.108-.638.374-1.003 1.048-1.17 1.838-.166.79-.149 1.752.018 2.807.064.408.152.835.262 1.276-.432.124-.84.26-1.22.407-.985.382-1.814.847-2.405 1.389-.592.542-.985 1.199-.985 1.946 0 .748.393 1.405.985 1.947.591.542 1.42 1.007 2.404 1.388.381.148.79.284 1.22.408-.11.44-.197.867-.261 1.276-.167 1.055-.184 2.016-.017 2.807.166.79.53 1.464 1.169 1.838.638.374 1.396.357 2.154.108s1.57-.744 2.388-1.418c.316-.261.636-.551.958-.868.322.317.642.607.958.868.817.674 1.63 1.17 2.388 1.418.758.249 1.516.266 2.154-.108.638-.374 1.003-1.048 1.17-1.838.166-.79.149-1.752-.018-2.807a14.868 14.868 0 0 0-.262-1.276c.432-.124.84-.26 1.22-.408.985-.38 1.814-.847 2.405-1.388.592-.542.985-1.199.985-1.947 0-.747-.393-1.404-.985-1.946-.591-.542-1.42-1.007-2.404-1.389a14.355 14.355 0 0 0-1.22-.407c.11-.441.197-.868.261-1.276.167-1.055.184-2.016.017-2.807-.166-.79-.53-1.464-1.169-1.838-.638-.374-1.396-.357-2.154-.108s-1.57.744-2.388 1.418c-.316.26-.636.551-.958.868M8.36 3.104c-.607-.2-1.06-.164-1.382.025-.322.189-.579.569-.712 1.201-.133.632-.13 1.464.026 2.45.06.38.142.777.245 1.191a22.608 22.608 0 0 1 2.934-.463 23.173 23.173 0 0 1 1.862-2.346c-.302-.297-.6-.568-.895-.81-.764-.63-1.472-1.05-2.078-1.248M12 5.86c-.428.472-.858.995-1.281 1.561a27.772 27.772 0 0 1 2.562 0A21.412 21.412 0 0 0 12 5.86m-3.228 2.7a21.08 21.08 0 0 0-1.974.345c.19.613.421 1.251.693 1.906a28.762 28.762 0 0 1 1.281-2.25M8 11.952a27.36 27.36 0 0 1 2-3.515 26.447 26.447 0 0 1 4.002 0 27.322 27.322 0 0 1 2 3.515 27.386 27.386 0 0 1-2 3.516 26.49 26.49 0 0 1-4.002 0 27.29 27.29 0 0 1-2-3.516m-1.058 0A23.44 23.44 0 0 1 5.87 9.144a13.3 13.3 0 0 0-1.138.38c-.92.356-1.632.769-2.105 1.202-.474.434-.67.849-.67 1.226 0 .378.196.793.67 1.226.473.434 1.185.846 2.105 1.203a13.3 13.3 0 0 0 1.138.38 23.75 23.75 0 0 1 1.072-2.809M6.798 15c.19-.613.421-1.252.693-1.907a28.668 28.668 0 0 0 1.281 2.251A20.894 20.894 0 0 1 6.798 15m-.261.935c-.103.413-.185.811-.245 1.19-.156.987-.16 1.818-.026 2.45.133.633.39 1.013.712 1.202.323.188.775.224 1.382.025.606-.2 1.314-.618 2.079-1.248.293-.242.592-.513.894-.81a23.174 23.174 0 0 1-1.862-2.347 22.622 22.622 0 0 1-2.934-.462m6.13 2.809c.302.297.6.568.895.81.764.63 1.472 1.049 2.078 1.248.607.199 1.06.163 1.382-.025.322-.19.579-.569.712-1.201.133-.633.13-1.464-.026-2.45-.06-.38-.142-.778-.245-1.191a22.62 22.62 0 0 1-2.934.462 23.17 23.17 0 0 1-1.862 2.346m.614-2.26c-.423.567-.853 1.09-1.281 1.562a21.389 21.389 0 0 1-1.281-1.562 27.814 27.814 0 0 0 2.562 0m1.947-1.14A20.893 20.893 0 0 0 17.202 15a21.877 21.877 0 0 0-.693-1.907 28.658 28.658 0 0 1-1.281 2.251m1.83-3.39c.439.964.797 1.91 1.073 2.808a13.3 13.3 0 0 0 1.138-.38c.92-.357 1.632-.77 2.105-1.203.474-.433.67-.848.67-1.226 0-.377-.196-.792-.67-1.226-.473-.433-1.184-.846-2.105-1.202a13.411 13.411 0 0 0-1.138-.38 23.436 23.436 0 0 1-1.072 2.808m.405-3.982a22.606 22.606 0 0 0-2.934-.463 23.172 23.172 0 0 0-1.862-2.346c.302-.297.6-.568.895-.81.764-.63 1.472-1.049 2.078-1.248.607-.2 1.06-.164 1.382.025.322.189.579.569.712 1.201.133.632.13 1.464-.026 2.45-.06.38-.142.777-.245 1.191m-.261.935a21.86 21.86 0 0 1-.693 1.906 28.747 28.747 0 0 0-1.281-2.25c.695.088 1.356.204 1.974.344"
          clipRule="evenodd"
        />
      </>
    </SfIconBase>
  );
}
