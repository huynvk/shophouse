const Calendar = ({ color, ...props }) => (
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
        d='M24 29H8a5 5 0 01-5-5V10a5 5 0 015-5h16a5 5 0 015 5v14a5 5 0 01-5 5zM8 7a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V10a3 3 0 00-3-3z'
      />
      <path
        fill={color}
        d='M24 25h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1zm-3-2h2v-2h-2zM28 13H4a1 1 0 010-2h24a1 1 0 010 2zM11 9a1 1 0 01-1-1V4a1 1 0 012 0v4a1 1 0 01-1 1zM21 9a1 1 0 01-1-1V4a1 1 0 012 0v4a1 1 0 01-1 1z'
      />
    </g>
    <path fill='none' d='M0 0h32v32H0z' />
  </svg>
);

export default Calendar;
