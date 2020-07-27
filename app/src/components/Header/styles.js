import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fff',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: '#0275D8',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#90A0B7',
    flexGrow: 1,
  },
  search: {
    display: 'flex',
    color: '#C2CFE0',
    marginRight: '15px',
  },
  input: {
    marginBottom: '20px',
  },
  badge: {
    color: '#0275D8',
  },
  exitApp: {
    color: '#0275D8',
    marginLeft: '20px',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  pageTitle: {
    color: '#000',
    fontWeight: '500',
    fontSize: '18px',
  },
}));
