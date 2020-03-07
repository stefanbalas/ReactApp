import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NoteIcon from '@material-ui/icons/Note';
import {Box} from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function MouseOverPopover(props) {
    const classes = useStyles();
    const {side_data} = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                component={'span'}
            >
                <Box display={"flex"}>
                    {props.main_data}
                    <NoteIcon fontSize="small"/>
                </Box>
            </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography component={'span'}>
                    <h4>Diagnosis:</h4>
                    Description: {side_data.diagnosis_description}<br/>
                    Details: {side_data.diagnosis_description_detailed}<br/>
                    Administered Drug Treatment: {side_data.administered_drug_treatment}<br/>
                </Typography>
            </Popover>
        </div>
    );
}
