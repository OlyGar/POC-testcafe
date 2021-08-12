import {Selector, t} from 'testcafe'
import {DATES} from '../data/Constants'
import BasePage from './BasePage'
class TodayPage {
    constructor(){
        this.pageTitle = Selector('h1').withText('Today')
        this.addTaskButtonAfter = Selector('.reactist_button.reactist_button--primary')
        this.titleField = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskCreated = Selector('.markdown_content.task_content')
        this.todayButton = Selector('.date.date_today')
        this.tomorrowButton = Selector('.scheduler-suggestions-item').withText('Tomorrow') 
        this.moreTaskActionsOption = Selector ('.icon_menu_item__content').withText('Delete task')
        this.deleteTaskConfirmationButton = Selector ('.ist_button.ist_button_red')
    }
    
    // Funtion to create tasks with today or tomorrow due dates
    async createTask(title,date){
        await t.click(BasePage.quickAddTaskButton)
        if (date == DATES.TODAY){
            await t
            .typeText(this.titleField, title, {paste:true})
            .click(this.addTaskButtonAfter)
        }
        if (date == DATES.TOMORROW){
            await t
            .typeText(this.titleField, title, {paste:true})
            .click(this.todayButton)
            .click(this.tomorrowButton)
            .click(this.addTaskButtonAfter)
            .click(BasePage.upcomingLink)
        }
    }
    // Function to create several today tasks
    async createSeveralTasks (tasks){
        await t.click(BasePage.todayLink)
        for (let index = 0; index < tasks; index++) {
            await this.createTask('Task '+index, DATES.TODAY)        
        } 
    }
    // Function to Validate if tasks created in these test, were created correctly
    async validateTasksCreated(numberOfTasks){
        for (let index = 0; index < numberOfTasks; index++) {           
            let taskName = await this.taskCreated.nth(index).innerText
            if (taskName != 'Task '+index) {
                return false      
            }
        }
        return true  
    }
    // Function to delete all existent tasks 
    async deleteSeveralTasks(){
        await t.click(BasePage.inboxLink)
        let numberOfTasks = await this.taskCreated.count
        if (numberOfTasks > 0){
            for (let index = 0; index < numberOfTasks; index++) {
                await t
                .rightClick(this.taskCreated)
                .click(this.moreTaskActionsOption)
                .click(this.deleteTaskConfirmationButton) 
            }        
        } 
    }
    // Function to validate if all the tasks were deleted.
    async validateTasksDeleted(){
        let numberOfTasks = await this.taskCreated.count
        if (numberOfTasks > 0){
            return false
        }
        return true 
    }
}

export default new TodayPage