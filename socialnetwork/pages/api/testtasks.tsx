import { NextApiRequest, NextApiResponse } from "next";

const data = {
    errors: null,
    data: {
        projects: [
            {
                id: "6512bd43d9caa6e02c990b0a82652dca",
                parent: "",
                user: "",
                title: "main project",
                labels: {},
                items: [
                    {
                        id: "698d51a19d8a121ce581499d7b701668",
                        title: "sub project1",
                        items: [],
                    },
                    {
                        id: "f3527f99cc6f600235ae6b562d3980d9 ",
                        title: "sub project2",
                        items: [
                            {
                                id: "405ab7b6446d93e2c014022bf5f1ab76",
                                title: "task 1",
                                items: [],
                            },
                            {
                                id: "ffa2ebf7ce58a55e640b32e00b5999fb",
                                title: "task 2",
                                items: [],
                            },
                            {
                                id: "da5510dfe266ae3a998e85d3bb368622",
                                title: "task 3",
                                items: [
                                    {
                                        id: "",
                                        title: "subtask 1",
                                        items: [],
                                    },
                                ],
                            },
                            {
                                id: "8af2412a6a7b22ce63fb733fcf6365d7",
                                title: "task 4",
                                items: [],
                            },
                        ],
                    },
                    {
                        id: "754ee2a8de2d24e4e7956e7237a2b174",
                        title: "sub project3",
                        items: [
                            {
                                id: "66d06aa88e2b6fa94676ffb0be3e5d2c",
                                title: "task 3",
                                items: [
                                    {
                                        id: "01ebeaafc334e503f4acc94a18df9fa5",
                                        title: "subtask 1",
                                        items: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: "318556cb5e016c63d0efc795c9d96161",
                        title: "sub project4",
                        items: [],
                    },
                ],
            },
            {
                id: "49c6bebc53d5f761cf04401cf31693dc",
                title: "pet project",
                items: [],
            },
            {
                id: "ebf6821c6b3439b63d2019a12e0a48b5",
                title: "another project",
                items: [
                    {
                        id: "bf55b07a33813243b962c05e6af76bc0",
                        title: "sub project4",
                        items: [],
                    },
                ],
            },
            {
                id: "35ff42097635f2a7cdfae82adba2fbad",
                title: "Jon Dou",
                items: [
                    {
                        id: "d646bb80b5b8992100cc8340804ce0b7",
                        title: "send email",
                        items: [],
                    },
                ],
            },
            {
                id: "f4a0a0581e749c3e171aa9eb36098e81",
                title: "Mary Key",
                items: [
                    {
                        id: "260486b8a431a59472a426a9d19d3d71",
                        title: "send invite",
                        items: [],
                    },
                    {
                        id: "2af36c412bb04ebc9873ab5592a85397",
                        title: "add payment",
                        items: [],
                    },
                ],
            },
        ],
        inwork: [
            {
                id: "d646bb80b5b8992100cc8340804ce0b7",
                chain: ["Jon Dou", "send email"],
            },
            {
                id: "da5510dfe266ae3a998e85d3bb368622",
                chain: ["main project", "sub project2", "task 3", "subtask 1"],
            },
            {
                id: "698d51a19d8a121ce581499d7b701668",
                chain: ["main project", "sub project1"],
            },
            {
                id: "260486b8a431a59472a426a9d19d3d71",
                chain: ["Mary Key", "send invite"],
            },
        ],
        done: [
            {
                id: "405ab7b6446d93e2c014022bf5f1ab76",
                chain: ["main project", "sub project2", "task 1"],
            },
            {
                id: "2af36c412bb04ebc9873ab5592a85397",
                chain: ["Mary Key", "add payment"],
            },
        ],
    },
    count: 0,
};

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(data);
};
