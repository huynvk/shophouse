const Account = ({ color, ...props }) => {
  return (
    <svg
      height='1em'
      viewBox='1 -1 45 45'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M24 45C12.402 45 3 35.598 3 24S12.402 3 24 3s21 9.402 21 21-9.402 21-21 21zm11.633-6a48.238 48.238 0 00-.514-.742c-.277-.394-.554-.788-.802-1.178-.012-.018-1.382-1.856-6.317-2.08-1.717 0-2.965-1.288-2.968-3.066L25 31c0-.135-.016.148 0 0v-1l1-1c.731-.339 1.66-.909 2.395-1.464l.135-.093c.581-.369 1.393-1.146 1.47-1.443l.036-.381C30.409 23.696 31 20.198 31 19c0-4.71-2.29-7-7-7-4.775 0-7 2.224-7 7 0 1.23.591 4.711.963 6.616l.035.352c.063.313.799 1.054 1.449 1.462l.098.062c.788.551 1.73 1.165 2.455 1.508l1 1v1c.014.138 0-.146 0 0l-.033.934c0 1.775-1.246 3.064-2.883 3.064h-.003c-4.956.201-6.393 2.077-6.395 2.077-.252.396-.528.789-.807 1.184-.157.224-.355.51-.513.741 3.217 2.498 7.245 4 11.633 4s8.417-1.502 11.634-4zM24 5C13.507 5 5 13.507 5 24c0 5.386 2.25 10.237 5.85 13.694.382-.565.79-1.129 1.15-1.694 0 0 1.67-2.743 8-3 .645 0 .967-.422.967-1.066h.001L20.967 31c0-.13-.021-.247-.027-.373a17.497 17.497 0 01-2.539-1.494s-2.4-1.476-2.4-3.133c0 0-1-5.116-1-7 0-4.644 1.986-9 9-9 6.92 0 9 4.356 9 9 0 1.838-1 7-1 7 0 1.611-2.4 3.133-2.4 3.133a13.873 13.873 0 01-2.543 1.546c-.005.109-.023.209-.023.321l-.001.934h.001c-.002.644.32 1.066.965 1.066 6.424.288 8 3 8 3 .36.565.767 1.129 1.149 1.694C40.749 34.237 43 29.386 43 24c0-10.493-8.507-19-19-19z'
        fillRule='evenodd'
        fill={color}
      />
    </svg>
  );
};

export default Account;