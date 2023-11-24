import {
    GroupAddIcon,
    Settings,
    TaskIcon,
    ManageAccountsIcon,
    LogoutIcon,
    DeleteIcon,
  } from "@/shared/modules/material/material-icon/material-icons";

export const actions = [
    { icon: <DeleteIcon />, name: "Delete" },
    { icon: <LogoutIcon />, name: "Leave Server" },
    { icon: <ManageAccountsIcon />, name: "Add Roles" },
    { icon: <TaskIcon />, name: "Claim Server" },
    { icon: <Settings />, name: "Server Setting " },
    { icon: <GroupAddIcon />, name: "Invite People" },
  ];