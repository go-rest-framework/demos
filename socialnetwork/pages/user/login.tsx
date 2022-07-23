import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import NextLink from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

import GoogleIcon from "@mui/icons-material/Google";

export const LoginForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Box
            sx={{
                //marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "6em",
            }}
        >
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                {/*<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />*/}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 3 }}>
                    Sign In
                </Button>
                <Box sx={{ textAlign: "center" }}>OR</Box>
                <Button type="submit" fullWidth variant="text" startIcon={<GoogleIcon />} sx={{ mt: 1, mb: 2 }}>
                    Log in with Google
                </Button>
                <Grid container>
                    <Grid item xs>
                        <NextLink href="/user/repass">
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item>
                        <NextLink href="/user/reg">
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default function SignIn() {
    return (
        <Layout>
            <Head>
                <title>Sign in</title>
            </Head>
            <Container component="main" maxWidth="xs">
                <Avatar sx={{ m: 1, bgcolor: "disable.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm />
            </Container>
        </Layout>
    );
}
