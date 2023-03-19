import {createTheme} from "@mui/material";

export function createOverrideTheme() {
    return createTheme({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 640,
                    md: 1024,
                    lg: 1408,
                    xl: 1536,
                },
            },
            typography: {
                fontFamily: ['Inter', 'sans-serif'].join(","),
                fontSize: 16,
                h1:{
                    fontFamily: 'Inter',
                    fontSize: '56px',
                    fontWeight: '700',
                    lineHeight: '64px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                },
                h4:{
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '40px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                },
                h5:{
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '32px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                },
                body1:{
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '26px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                },
                body2:{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                },
                subtitle1:{
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '26px',
                    letterSpacing: '0.012em',
                    textAlign: 'center',
                },
                caption: {
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    letterSpacing: '0.5px',
                    textAlign: 'left',
                },
                // captionS: {
                //     fontFamily: 'Inter',
                //     fontSize: '12px',
                //     fontWeight: '600',
                //     lineHeight: '22px',
                //     letterSpacing: '0.45px',
                //     textAlign: 'center',
                // },
                button: {
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    textAlign: 'center',
                    textTransform:'none',
                }

        },
        components: {
            MuiContainer:{
                styleOverrides: {
                    root: {
                        maxWidth:'1408px',
                        paddingLeft:'0',
                        paddingRight:'0',
                        // padding:'0 !important',
                        '&._containerHeader':{
                            display:'flex',
                            alignItems:'center',
                            height:'80px',
                            justifyContent:'space-between',
                        }
                    },
                },
            },
            MuiTypography:{
                styleOverrides: {
                    root: {
                        '&._logo': {
                            color:"black",
                        },
                    },
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: '#FFFFFF',
                        boxShadow: 'none',
                    },
                },
            },
            MuiSelect:{
                styleOverrides: {
                    select:{
                        //Якщо ви не знаєете де ваш падінг між текстом і іконкою то я тут його обнулив тому що не зміг найти інгшого варінта
                        paddingRight: '0 !important',
                        '&._selectChooseCity': {
                            // paddingRight: '0 !important',
                        },
                    },
                },
            },
            MuiLink:{
                styleOverrides: {
                    root:{
                        '&._headerNavLink': {
                            textDecoration: 'none',
                            color: '#000000',
                        }
                    },
                },
            },
            MuiButton:{
                styleOverrides: {
                    root:{
                        '&._headerAppointmentButton': {
                            background: '#3ABD98',
                            color: '#FFFFFF',
                            padding:'10px 24px',
                            borderRadius:'8px',
                            textTransform:'none',
                        },
                        '&._headerSingInButton': {
                            background: '#FFFFFF',
                            color: '#3ABD98',
                            border:'1px solid #3ABD98',
                            padding:'10px 24px',
                            borderRadius:'8px',
                            textTransform:'none',
                        },
                    },
                },
            }
        }
}
)};