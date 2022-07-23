import Link from "next/link";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MULink from "@mui/material/Link";

interface DatalistOneItem {
    name: string;
    url: string;
}

interface DatalistOne {
    title: string;
    items: DatalistOneItem[];
}

export default function Datalist({ data }: { data: DatalistOne[] }) {
    return (
        <>
            {data.map((one) => (
                <Grid item xs={6} sm={3} key={one.title}>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        {one.title}
                    </Typography>
                    <ul>
                        {one.items.map((item) => (
                            <li key={item.name}>
                                <Link href="#">
                                    <MULink href="#">{item.name}</MULink>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Grid>
            ))}
        </>
    );
}
