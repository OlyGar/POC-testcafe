import LoginPage from '../pages/LoginPage'
import {URLS,CREDENTIALS,FAVORITES,COLORS,NAMES} from '../data/Constants'
import ProjectPage from '../pages/ProjectPage'
import BasePage from '../pages/BasePage'
import TodayPage from '../pages/TodayPage'

// Project Feature test 
fixture('Project feature test')
    .page `${URLS.LOGIN_URL}`

    // Fixture hook to execute Login page before each test case
    .beforeEach( async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.expect(TodayPage.pageTitle.exists).ok()
        await BasePage.deleteAllProjects()
    })

// 6. Create a new project, choose any color you likeand add it to favorites. 
test.meta('type','smoke') 
    // Test hook to execute after this test case
    .after( async () => {
        await ProjectPage.deleteProject()
    })('As a user, I should be able to create a new project with one color and add it to favorites', async t => {   
    await BasePage.createProject(NAMES.PROJECT_NAME,COLORS.GRAPE,FAVORITES.YES)
    await t.click(BasePage.favoriteListItem.withText(NAMES.PROJECT_NAME))
    await t.expect(await ProjectPage.validateProjectOptimal(NAMES.PROJECT_NAME,COLORS.GRAPE,FAVORITES.YES)).ok()
})