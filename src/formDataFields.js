export const formDataFields = [
    {
        name: "name",
        label: "Name",
        type: "text",
        required: false,
        regex: /^[a-zA-Z0-9 -.]+$/i,
        helperText: 'Please use only letters, numbers hyphen and space'
     },
    {
        name: "gender",
        label: "Gender",
        type: "text", // select
        required: false,
        helperText: "Allowed options are: Male, Female, Transgender or Neutral",
        // options: [
        //     { value: 'male', label: 'Male' },
        //     { value: 'female', label: 'Female' },
        //     { value: 'transgender', label: 'Transgender' },
        //     { value: 'neutral', label: 'Neutral' }
        // ]
    },
    {
        name: "status",
        label: "Marital Status",
        type: "text", // select
        required: false,
        helperText: "Allowed options are: Married, Widowed, Separated, Divorced or Single",
        // options: [
        //     { value: 'married', label: 'Married' },
        //     { value: 'widowed', label: 'Widowed' },
        //     { value: 'separated', label: 'Separated' },
        //     { value: 'divorced', label: 'Divorced' },
        //     { value: 'single', label: 'Single' }
        // ]
    },
    {
        name: "dateOfBirth",
        label: "Date of Birth",
        type: "date",
        required: false,
    },
    {
        name: "integer",
        label: "Arbitrary Integer",
        type: "number",
        required: true,
        regex: /^([+-]?[1-9]\d*|0)$/,
        helperText: 'Please use integers only'
    }
]