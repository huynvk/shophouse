const Price = ({ color, ...props }) => {
  return (
    <svg
      id='prefix__Layer_1'
      viewBox='9 9 45 45'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <g id='prefix__Icon-Tag' transform='translate(79 382)' fill={color}>
        <path
          className='prefix__st0'
          d='M-51-328.9c-1.3 0-2.5-.5-3.4-1.4l-13.3-13.3c-1.9-1.9-1.9-4.9 0-6.8l17.8-17.8c1.6-1.6 4.5-2.8 6.7-2.8h11.4c2.6 0 4.8 2.2 4.8 4.8v11.4c0 2.2-1.2 5.1-2.8 6.7l-17.8 17.8c-.9.9-2.1 1.4-3.4 1.4zm7.8-39.1c-1.4 0-3.6.9-4.6 1.9l-17.8 17.8c-.7.7-.7 1.8 0 2.5l13.3 13.3c.7.7 1.9.7 2.5 0l17.8-17.8c1-1 1.9-3.1 1.9-4.6v-11.4c0-1-.8-1.8-1.8-1.8h-11.3v.1z'
          fill={color}
        />
        <path
          className='prefix__st0'
          d='M-39-353.1c-3.2 0-5.9-2.6-5.9-5.9 0-3.2 2.6-5.9 5.9-5.9 3.2 0 5.9 2.6 5.9 5.9 0 3.2-2.6 5.9-5.9 5.9zm0-9c-1.7 0-3.1 1.4-3.1 3.1 0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1 0-1.7-1.4-3.1-3.1-3.1z'
          fill={color}
        />
      </g>
    </svg>
  );
};

export default Price;