const BackArrow = ({ color, ...props }) => {
  return (
    <svg
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g data-name='Layer 2'>
        <path
          fill={color}
          d='M13 26a1 1 0 01-.71-.29l-9-9a1 1 0 010-1.42l9-9a1 1 0 111.42 1.42L5.41 16l8.3 8.29a1 1 0 010 1.42A1 1 0 0113 26z'
        />
        <path fill={color} d='M28 17H4a1 1 0 010-2h24a1 1 0 010 2z' />
      </g>
      <path fill='none' d='M0 0h32v32H0z' />
    </svg>
  );
};

export default BackArrow;
