import React, { type FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Drawer, ListItemIcon, ListItemText, MenuItem, styled, IconButton, type Theme, Grid, type CSSObject } from '@mui/material'
import { FitnessCenter, ChevronRight, ChevronLeft, MonitorHeart } from '@mui/icons-material'
import { common, grey } from '@mui/material/colors'
import { drawerWidth, routes } from 'config'
import { themePalette } from 'shared/styles/muiTheme'

const ToggleButton = styled(IconButton)<{ open?: boolean }>(({ theme, open }) => ({
  position: 'absolute',
  right: -20,
  top: 40,
  backgroundColor: theme.palette.primary.main,
  color: common.white,
  boxSizing: 'border-box',
  border: '5px solid #FFF'
}))

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflow: 'visible'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflow: 'visible',
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 3px)`
  }
})

const StyledDrawer = styled(Drawer)<{
  open: boolean
}>(({ open, theme }) => ({
  height: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'visible',
  '& .MuiPaper-root': {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    padding: 4,
    boxShadow: '10px 0px 9px #0000001A'
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}))

export const Sidebar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const mainMenuItems = [
    { id: 'calories-burnout', title: 'CALORIES BURNOUT', link: routes.home, icon: <FitnessCenter/> },
    { id: 'bmi', title: 'BMI', link: routes.bmi, icon: <MonitorHeart/> }
  ]

  return (
      <StyledDrawer variant="permanent" open={sidebarOpen}>
            <ToggleButton
                disableRipple
                open={sidebarOpen}
                onClick={() => { setSidebarOpen(!sidebarOpen) }}
            >
                { sidebarOpen ? <ChevronLeft/> : <ChevronRight/>}
            </ToggleButton>
            <Grid container direction="column" mt={15}>
                {mainMenuItems.map(({ id, title, link, icon }) => (
                    <MenuItem
                        key={id}
                        component={NavLink}
                        to={link}
                        sx={{
                          color: themePalette.palette.primary,
                          padding: 2,
                          '& .MuiListItemIcon-root': {
                            color: themePalette.palette.primary
                          },
                          '&.active': {
                            fontSize: 900,
                            borderRadius: 10,
                            background: grey['200'],
                            width: '100%'
                          },
                          '&:hover': {
                            width: 'inherit',
                            borderRadius: 10
                          }
                        }}
                        data-onboarding={`menu-sidebar-item-${id}`}
                    >
                        <ListItemIcon> {icon} </ListItemIcon>
                        <ListItemText sx={{ opacity: sidebarOpen ? 1 : 0 }}>
                            {title}
                        </ListItemText>

                    </MenuItem>
                ))}
            </Grid>
        </StyledDrawer>
  )
}
