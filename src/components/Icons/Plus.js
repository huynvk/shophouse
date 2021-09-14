const Plus = ({ color, ...props }) => {
  return (
    <svg
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <defs>
        <style>
          {`.prefix__cls-1{fill:${color};stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}`}
        </style>
      </defs>
      <g id='prefix__plus'>
        <path className='prefix__cls-1' d='M16 7v18M7 16h18' />
      </g>
    </svg>
  );
};

export default Plus;
