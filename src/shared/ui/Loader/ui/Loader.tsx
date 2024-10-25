import { SVGProps } from "react";
export const Loader = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
		<path fill="none" d="M0 0h200v200H0z" />
		<path
			fill="none"
			stroke="#FF156D"
			strokeLinecap="round"
			strokeWidth={15}
			d="M70 95.5V112m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5L92 57.3M33.6 91 48 82.7m0-25.5L33.6 49m58.5 33.8 14.3 8.2"
			transform-origin="center"
		>
			<animateTransform
				attributeName="transform"
				calcMode="spline"
				dur={2}
				keySplines="0 0 1 1"
				keyTimes="0;1"
				repeatCount="indefinite"
				type="rotate"
				values="0;-120"
			/>
		</path>
		<path
			fill="none"
			stroke="#FF156D"
			strokeLinecap="round"
			strokeWidth={15}
			d="M130 155.5V172m0-84v16.5m0 0a25.5 25.5 0 1 0 0 51 25.5 25.5 0 0 0 0-51Zm36.4 4.5-14.3 8.3M93.6 151l14.3-8.3m0-25.4L93.6 109m58.5 33.8 14.3 8.2"
			transform-origin="center"
		>
			<animateTransform
				attributeName="transform"
				calcMode="spline"
				dur={2}
				keySplines="0 0 1 1"
				keyTimes="0;1"
				repeatCount="indefinite"
				type="rotate"
				values="0;120"
			/>
		</path>
	</svg>
);
