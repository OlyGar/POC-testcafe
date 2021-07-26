import LoginPage from '../pages/LoginPage'
import TodayPage from '../pages/TodayPage'
import {URLS, CREDENTIALS, NAMES, DATES, NUMBER_OF_TASKS} from '../data/Constants'

fixture('Tasks for today feature test')
    .page `${URLS.LOGIN_URL}`

    // Fixture hook to execute before each test case
    .beforeEach( async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD )
        await t.expect(TodayPage.pageTitle.exists).ok()
        await TodayPage.deleteSeveralTasks() 
        await t.wait(5000)
        await t.setTestSpeed(0.5)
    })

    // Fixture hook to execute after each test case (7. Delete every task created (if there's any) after your tests)
    .afterEach( async t => {
        await TodayPage.deleteSeveralTasks()
        await t.wait(5000)
        await t.setTestSpeed(0.5)  
    })

// 3. Create a new task with Today as the due date and validate it was created correctly  
test.meta('type','smoke') ('As a user, I should be able to create a new task with today as due date', async t => { 
    
    await t.click(TodayPage.addTaskButtonBefore)
    await TodayPage.createTask(NAMES.TASK_TODAY, DATES.TODAY)
    await t
        .expect( await TodayPage.validateTasksCreated(NUMBER_OF_TASKS.ONLYONE)).ok()
})

// 5. Create 10 new tasks with today as the due date and validate they were created correctly with dynamic names.
test ('As a user, I should be able to create 10 tasks with today as due date', async t => { 

    await t.click(TodayPage.addTaskButtonBefore)
    await TodayPage.createSeveralTasks(NUMBER_OF_TASKS.MAXIMUM)
    await t
        .expect( await TodayPage.validateTasksCreated(NUMBER_OF_TASKS.MAXIMUM)).ok()
        .wait(5000)
})

// Test case to delete all the tasks created.
test ('As a user, I should be able to delete all tasks created', async t => { 
    await TodayPage.deleteSeveralTasks()  
    await t
        .expect(TodayPage.validateTasksDeleted).ok()   
})