import * as MaterialUI from '@mui/material';

/**
 * reusable Material Alert with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Alert = (props) => {
    return (
        <MaterialUI.Alert {...props} />
    )
}

/**
 * reusable Material Backdrop  with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Backdrop = (props) => {
    return (
        <MaterialUI.Backdrop  {...props} />
    )
}

/**
 * reusable Material Dialog with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Dialog = (props) => {
    return (
        <MaterialUI.Dialog {...props} />
    )
}

/**
 * reusable Material Progress with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
// export const Progress = (props) => {
//     return (
//         <MaterialUI.Progress {...props} />
//     )
// }

/**
 * reusable Material Skeleton  with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
// export const Skeleton = (props) => {
//     return (
//         <MaterialUI.Skeleton  {...props} />
//     )
// }

/**
 * reusable Material Snackbar  with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const Snackbar = (props) => {
    return (
        <MaterialUI.Snackbar {...props} />
    )
}

/**
 * reusable Material CircularProgress  with just export with diffrent style
 * @param {*} props 
 * @returns 
 */
export const CircularProgress  = (props) => {
    return (
        <MaterialUI.CircularProgress  {...props} />
    )
}
