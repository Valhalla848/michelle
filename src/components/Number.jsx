import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";

import SpeedDialAction from "@mui/material/SpeedDialAction";
import FaxIcon from "@mui/icons-material/Fax";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";

const actions = [
  { icon: <FaxIcon />, name: "24/7 Режим Работы" },
  { icon: <InterpreterModeIcon />, name: "+996(999)99-99-24" },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function myFunction() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
  }

  return (
    <div id="number">
      <Box
        sx={{
          height: 330,
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            color: "success",
          }}
          icon={<LocalPhoneIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
