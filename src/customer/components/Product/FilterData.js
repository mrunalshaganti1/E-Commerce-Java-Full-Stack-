export const color = [
    "White",
    "Black",
    "Red",
    "Maroon",
    "Beige",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White"},
            { value: "black", label: "Black"},
            { value: "red", label: "Red"},
            { value: "maroon", label: "Maroon"},
            { value: "beige", label: "Beige"},
            { value: "green", label: "Green"},
            { value: "yellow", label: "Yellow"},
        ]
    },

    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
        ]
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "59-99", label: "$59 To $99"},
            {value: "99-149", label: "$99 To $149"},
            {value: "149-199", label: "$149 To $199"},
            {value: "199-249", label: "$199 To $249"},
            {value: "249-299", label: "$249 To $299"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10", label: "10% And Above"},
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
            {value: "70", label: "70% And Above"},
            {value: "80", label: "80% And Above"},
        ],
    },
    {
        id:"stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"},
        ]
    }
]