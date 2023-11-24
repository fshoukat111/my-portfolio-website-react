import * as MaterialUI from '@mui/material';


/**
 * reusable Material Modal with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Modal = (props) => {
    return (
        <MaterialUI.Modal {...props} />
    )
}

/**
 * reusable Material Popover with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Popover = (props) => {
    return (
        <MaterialUI.Popover {...props} />
    )
}

/**
 * reusable Material Popper with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Popper = (props) => {
    return (
        <MaterialUI.Popper {...props} />
    )
}

/**
 * reusable Material ClickAwayListener with just export with diffrent style
 * @param {*} props
 * @returns 
 */
export const ClickAwayListener = (props) => {
    return (
        <MaterialUI.ClickAwayListener {...props} />
    )
}