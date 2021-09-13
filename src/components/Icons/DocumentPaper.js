const DocumentPaper = ({ color, ...props }) => {
  return (
    <svg
      height='1em'
      viewBox='0 0 48 48'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M37 47H11a4 4 0 01-4-4V5a4 4 0 014-4h19c.32 0 .593.161.776.395l9.829 9.829A.981.981 0 0141 12v31a4 4 0 01-4 4zM31 4.381V11h6.619L31 4.381zM39 13h-9a1 1 0 01-1-1V3H11a2 2 0 00-2 2v38a2 2 0 002 2h26a2 2 0 002-2V13zm-6 26H15a1 1 0 110-2h18a1 1 0 110 2zm0-8H15a1 1 0 110-2h18a1 1 0 110 2zm0-8H15a1 1 0 110-2h18a1 1 0 110 2z'
        fillRule='evenodd'
        fill={color}
      />
    </svg>
  );
};

export default DocumentPaper;
