import LoginPage from '../pages/LoginPage'
import TodayPage from '../pages/TodayPage'
import {URLS, CREDENTIALS,MESSAGES} from '../data/Constants'
import {STANDARD_USER} from '../data/Roles'

// Log in Features Test
fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`


test('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t.expect(TodayPage.pageTitle.exists).ok()
})

// 1. Successful login with credentials stored in .env file 
test.meta('type','smoke') ('As a user, I should be able to log in successfully by providing valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD )
    await t.expect(TodayPage.pageTitle.exists).ok()
})
// 2.1 First unsuccessful login - using same function (not user, not password)
test.meta('type','smoke')('As a user, I should not be able to log in succesfully without providing any credentials', async t => {
    await LoginPage.submitLoginForm(null, null)
    await t.expect(LoginPage.invalidEmail.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.EMAIL_REQUIRED)
})

// 2.2 Second unsuccessful login - using same fuction (valid user, no password)
test.meta('type','smoke')('As a user, I should not be able to log in succesfully without providing password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, null)
    await t.expect(LoginPage.invalidPassword.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.PASSWORD_REQUIRED)
})

// 2.3 Third unsuccessful login - using same function (valid user, wrong password)
test.meta('type','smoke')('As a user, I should not be able to log in succesfully providing an invalid password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.invalidPassword.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.WRONG_PASSWORD)
})


           
       




