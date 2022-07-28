import React from "react";
import { useRouter } from "next/router";
import { User } from "../../interfaces/";
import Layout from "../../components/layout";
import ElmList from "../../components/elementslist";

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
            <ElmList />
            <div>
                <h1>{data.name}</h1>
                <p>{data.id}</p>
            </div>
        </Layout>
    );
}
