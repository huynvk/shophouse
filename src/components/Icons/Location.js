const Location = ({ color, ...props }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        fill={color}
        d='M12 0C7 0 3 4 3 9c0 6.2 3.4 11.7 8.5 14.9.3.2.7.2 1.1 0 5-3.3 8.4-8.7 8.4-14.9 0-5-4-9-9-9zm0 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z'
      />
    </svg>
  );
};

export default Location;
