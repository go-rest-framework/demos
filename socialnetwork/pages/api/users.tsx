import { NextApiRequest, NextApiResponse } from "next";

const data = {
    errors: null,
    data: [
        { id: 101, name: "Alice" },
        { id: 102, name: "Bob" },
        { id: 103, name: "Caroline" },
        { id: 104, name: "Dave" },
    ],
    count: 4,
};

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(data);
};
