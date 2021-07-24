import LoginPage from '../pages/LoginPage'
import TodayPage from '../pages/TodayPage'
import UpcomingPage from '../pages/UpcomingPage'
import {URLS, CREDENTIALS, NAMES, DATES} from '../data/Constants'

fixture('Tasks for tomorrow feature test')
    .page `${URLS.LOGIN_URL}`

    // Fixture hook to be executed before each test case
    .beforeEach( async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD )
        await t.click(UpcomingPage.upcomingButton.nth(2))
        await TodayPage.deleteSeveralTasks() 
        await t.setTestSpeed(0.5)
    })

    // Fixture hook to be executed after each test case
    .afterEach( async t => {
        await TodayPage.deleteSeveralTasks()
        await t.setTestSpeed(0.5)  
    })

// 4. Create a single task selecting tomorrow as the due date andvalidate it was created correctly.
test.meta('type','smoke') ('As a user, I should be able to create a new task with tomorrow as duedate', async t => {   
    await t.click(TodayPage.addTaskButtonBefore)
    await TodayPage.createTask(NAMES.TASK_TOMORROW, DATES.TOMORROW)
    await t.click(TodayPage.upcomingButton.nth(2))
    await t.expect(UpcomingPage.tomorrowTaskCreated.nth(0).innerText).contains(NAMES.TASK_TOMORROW)
})