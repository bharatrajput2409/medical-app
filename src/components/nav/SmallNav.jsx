import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import { links } from "./links";
const useStyles = makeStyles((theme) => ({
  root: {},
}));
function Drawer({ open, handleDrawer }) {
  const classes = useStyles();
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={handleDrawer}
      className={classes.root}
    >
      <List component="nav">
        {links.map((link) => (
          <ListItem key={link.name} button className={classes.listbtns}>
            <ListItemText>{link.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Drawer;
