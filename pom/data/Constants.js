import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.BASE_URL+"/Users/showLogin/"
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.STANDARD_USER,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    }
}

export const MESSAGES = {
    ERROR:{
        LOGIN_PAGE:{
            EMAIL_REQUIRED: 'Invalid email address.',
            PASSWORD_REQUIRED: 'Blank password.',
            WRONG_PASSWORD: 'Wrong email or password.'
        }
    }
}

export const NAMES = {
        TASK_TODAY: 'Task Test case 3',
        TASK_TOMORROW: 'Task Test case 4',
        PROJECT_NAME: 'Project Test case 6',
    }


export const DATES = {
    TODAY:'Today',
    TOMORROW: 'Tomorrow'
}

export const FAVORITES = {
    YES: true,
    NO: false
}

export const COLORS = {
    GRAPE: 'Grape',
    RED: 'Red',
    BLUE: 'Blue'
}

export const NUMBER_OF_TASKS = {
    ONLYONE: 1,
    MINIMUM: 2,
    MAXIMUM: 10
}