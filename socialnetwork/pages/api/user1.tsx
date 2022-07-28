import { NextApiRequest, NextApiResponse } from "next";

const data = {
    errors: null,
    data: { id: 101, name: "User1 Name" },
    count: 0,
};

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(data);
};
