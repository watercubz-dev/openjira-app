import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Notification","Send Email"];
const menuIcons: string[] = ["Configuration", "Account"];
const confIcons: string[]  = ["Report bugs", "Logout"]

export const Sidebar = () => {
  const { sidemenuOpen, CloseSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={CloseSideMenu}>
      <Box sx={{ width: 220 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h5" >Home</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? (
                   <MailOutlineOutlinedIcon />
                ) : (
                  <ChatRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {menuIcons.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? (
                  <AccountCircleRoundedIcon />
                ) : (
                  < SettingsRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        
        
        <List>
          {confIcons.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? (
                  <LoginRoundedIcon />
                ) : (
                  <ReportProblemRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
