import { Role } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import { URLS, CREDENTIALS } from './Constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async () => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    
},{ preserveUrl: true})