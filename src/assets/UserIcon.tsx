const UserIcon = ({ width = 24, height = 24, color = "#CCCCCC" }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm0 32c-70.7 0-224 35.8-224 107.3V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V395.3c0-71.5-153.3-107.3-224-107.3z"
        fill={color}
      />
    </svg>
  );
  
  export default UserIcon;
  