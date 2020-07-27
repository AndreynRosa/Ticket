import { createStyles, makeStyles } from '@material-ui/core';
export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      width: '100%',
      margin: '0px auto',
      paddingTop: '20px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'rigth',
    },
  }),
);
