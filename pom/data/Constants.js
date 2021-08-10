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
    YES: 1,
    NO: 0
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

export const MORE_ACTIONS_MENU = {
    EDIT_TASK: 0,
    GO_TO_PROJECT: 1,
    REMINDERS: 2,
    MOVE_TO_PROJECTS: 3,
    DUPLICATE: 4,
    COPY_LINK_TO_TASK: 5,
    DELETE_TASK: 6
}

export const MORE_PROJECT_ACTIONS = {
    EDIT_PROJECT: 0,
    VIEW_AS_BOARD: 1,
    ADD_SECTION: 2,
    IMPORT_FROM_TEMPLATE: 3,
    EXPORT_AS_TEMPLATE: 4,
    DUPLICATE_PROJECT: 5,
    EMAIL_TASKS_TO_THIS_PROJECT: 6,
    PROJECT_CALENDAR_FEED: 7,
    SHOW_COMPLETED_TASKS: 8,
    ARCHIVE: 9,
    DELETE_PROJECT: 10
}