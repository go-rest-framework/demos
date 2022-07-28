import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MULink from "@mui/material/Link";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Datalist from "./datalist";
import AppBar from "./appbar";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    palette: {
        //primary: {
        //main: "#666fef",
        //},
        //secondary: {
        //main: "#EC7F5A",
        //contrastText: "#fff",
        //},
    },
});

const footers = [
    {
        title: "Company",
        items: [
            {
                name: "Team",
                url: "#",
            },
            {
                name: "History",
                url: "#",
            },
            {
                name: "Contact us",
                url: "#",
            },
            {
                name: "Locations",
                url: "#",
            },
        ],
    },
    {
        title: "Resources",
        items: [
            {
                name: "Resource",
                url: "#",
            },
            {
                name: "Resource name",
                url: "#",
            },
            {
                name: "Another resource",
                url: "#",
            },
            {
                name: "Final resource",
                url: "#",
            },
        ],
    },
    {
        title: "Legal",
        items: [
            {
                name: "Privacy policy",
                url: "#",
            },
            {
                name: "Terms of use",
                url: "#",
            },
        ],
    },
];

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link href="/user/login">
                <MULink href="#">{AppName}</MULink>
            </Link>
            {"  "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export const siteTitle = "Next.js Sample Website";
export const AppName = "Demogram";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <link rel="icon" href="/images/logo.svg" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                {home ? (
                    ""
                ) : (
                    <>
                        <AppBar />
                        {/*<Link href="/">
                                <a>← Back to home</a>
                            </Link>*/}
                        {/*<Link href="/user/reg">
                                <a>Registration</a>
                            </Link>
                            <Link href="/user/login">
                                <a>Login</a>
                            </Link>*/}
                        {/*<Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon color="action" />
                        </Badge>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>*/}
                    </>
                )}
            </header>
            <Container component="main" maxWidth="xl">
                <main>{children}</main>
                <footer>
                    <Container
                        maxWidth="md"
                        component="footer"
                        sx={{
                            fontSize: "0.9em",
                            borderTop: `1px solid ${theme.palette.divider}`,
                            marginTop: theme.spacing(8),
                            paddingTop: theme.spacing(3),
                            paddingBottom: theme.spacing(3),
                            [theme.breakpoints.up("sm")]: {
                                paddingTop: theme.spacing(6),
                                paddingBottom: theme.spacing(6),
                            },
                        }}
                    >
                        <Grid container spacing={4} justifyContent="space-evenly">
                            {/*<Grid item xs={6} sm={3}>
                                <Stack alignItems="center">
                                    <IconButton aria-label="facebook" size="large">
                                        <FacebookIcon color="primary" />
                                    </IconButton>
                                    <IconButton aria-label="instagram" size="large">
                                        <InstagramIcon color="primary" />
                                    </IconButton>
                                    <IconButton aria-label="youtube" size="large">
                                        <YouTubeIcon color="primary" />
                                    </IconButton>
                                </Stack>
                            </Grid>*/}
                            <Datalist data={footers} />
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Container>
                </footer>
            </Container>
        </ThemeProvider>
    );
}
