import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import NextLink from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    marginBottom: "0.25em",
    color: theme.palette.text.secondary,
}));

export default function SignIn() {
    return (
        <Layout>
            <Head>
                <title>Your tasks</title>
            </Head>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Item>xs=8</Item>
                    <Item sx={{ ml: "1em" }}>xs=8</Item>
                    <Item sx={{ ml: "2em" }}>xs=8</Item>
                    <Item sx={{ ml: "2em" }}>xs=8</Item>
                    <Item sx={{ ml: "1em" }}>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item sx={{ ml: "1em" }}>xs=8</Item>
                    <Item sx={{ ml: "1em" }}>xs=8</Item>
                    <Item sx={{ ml: "1em" }}>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item sx={{ ml: "1em" }}>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Layout>
    );
}
