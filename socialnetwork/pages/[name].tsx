import React from "react";
import { useRouter } from "next/router";
import { User } from "../interfaces/";
import Layout from "../components/layout";
import ElmList from "../components/elementslist";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddBtn from "../components/addbtn";
import Chip from "@mui/material/Chip";

export default function Profile() {
    const [data, setData] = React.useState<User | null>(null);
    const [isLoading, setLoading] = React.useState(false);
    const { query } = useRouter();
    const name = query?.name;

    console.log("name: ", name);

    React.useEffect(() => {
        setLoading(true);
        if (name != undefined) {
            fetch("/api/" + name, {
                method: "GET",
                //body: JSON.stringify(a),
                headers: {
                    "Content-Type": "application/json",
                    //Authorization: "Bearer " + props.config.PROUSERTOCKEN,
                },
                credentials: "same-origin",
            }).then(
                function (response) {
                    if (response.status === 200) {
                        response.json().then(function (res) {
                            if (res.errors != null) {
                                console.log(res.errors);
                            } else {
                                console.log(res.data);
                                setData(res.data);
                                setLoading(false);
                            }
                        });
                    } else {
                        alert("ERROR: " + response.status + " - " + response.statusText);
                    }
                },
                function (error) {
                    alert(error.message);
                }
            );
        }
    }, [name]);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;

    return (
        <Layout>
            <AddBtn />
            <Grid container spacing={6} justifyContent="center" sx={{ p: 4 }}>
                <Grid item sm={4}>
                    <Avatar alt="Remy Sharp" src="/images/ava.jpeg" sx={{ width: 250, height: 250, border: "3px solid grey" }} />
                </Grid>
                <Grid item sm={8}>
                    <h1>
                        {data.name}
                        <Button variant="outlined" size="small" sx={{ ml: 2 }}>
                            Edit
                        </Button>
                    </h1>
                    {/*<p>{data.id}</p>*/}
                    <Grid container spacing={2} justifyContent="left">
                        <Grid item sm={3}>
                            <Chip label="17" variant="outlined" sx={{ mr: 2 }} />
                            <b>demos</b>
                        </Grid>
                        <Grid item sm={3}>
                            <Chip label="54" variant="outlined" sx={{ mr: 2 }} />
                            <b>followers</b>
                        </Grid>
                        <Grid item sm={3}>
                            <Chip label="49" variant="outlined" sx={{ mr: 2 }} />
                            <b>following</b>
                        </Grid>
                    </Grid>
                    <p>profile info here</p>
                </Grid>
            </Grid>
            <ElmList />
            <div></div>
        </Layout>
    );
}
