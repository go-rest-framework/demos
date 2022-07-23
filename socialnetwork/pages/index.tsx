import Head from "next/head";
import Layout, { siteTitle, AppName } from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Datalist from "../components/datalist";
import ImgList from "../components/imglist";
import { LoginForm } from "./user/login";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*<h1>Main page</h1>*/}
            {/* Hero unit */}
            <div>
                <Container maxWidth="md">
                    <Grid container spacing={6} justifyContent="center">
                        <Grid item sm={6}>
                            <ImgList />
                        </Grid>
                        <Grid item sm={6}>
                            <Box sx={{ p: "1em", textAlign: "center" }}>
                                <Link href="/">
                                    <a>
                                        <Image src="/images/logo.svg" alt="" title="" width="100px" height="100px" objectFit="contain" />
                                    </a>
                                </Link>
                            </Box>
                            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                {AppName}
                            </Typography>
                            {/*<Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Take control of your workflows with a comprehensive solution based on artificial intelligence algorithms and
                                blockchain encryption.
                            </Typography>*/}
                            <LoginForm />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
    );
}
