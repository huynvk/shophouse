const Website = ({ color, ...props }) => (
  <svg
    height='1em'
    viewBox='155 155 200 200'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={10}
    >
      <circle cx={256} cy={256} r={91.3} />
      <path d='M315.6 186.9c-16 13.8-36.8 22.2-59.6 22.2-22.8 0-43.6-8.3-59.6-22.1M196.4 325.1c16-13.8 36.8-22.2 59.6-22.2 22.8 0 43.6 8.4 59.6 22.2' />
      <path d='M256 164.7c-23 18.2-38.5 52.3-38.5 91.3s15.5 73.1 38.5 91.3c23-18.2 38.5-52.3 38.5-91.3S279 182.9 256 164.7zM164.7 256h182.6' />
    </g>
  </svg>
);

export default Website;
