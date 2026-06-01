import Switch from "@mui/material/Switch";

const label = { slotProps: { input: { "aria-label": "Switch demo" } } };

export default function DarkModeToggle(props) {
  //   const [darkMode, setDarkMode] = React.useState(false);
  return (
    <>
      <Switch {...label} onClick={props.onToggle} />
      {/* <button onClick={props.onToggle} className="object-right-">
        Dark Mode
      </button> */}
    </>
  );
}
