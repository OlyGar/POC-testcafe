import {Selector, t} from 'testcafe'
import { DATES, NAMES, NUMBER_OF_TASKS, MORE_ACTIONS_MENU } from '../data/Constants'
class TodayPage {
    constructor(){
        this.pageTitle = Selector('h1').withText('Today')
        this.addTaskButtonBefore = Selector('.plus_add_button')
        this.addTaskButtonAfter = Selector('.reactist_button.reactist_button--primary')
        this.titleField = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.taskCreated = Selector('.markdown_content.task_content')
        this.todayButton = Selector('.date.date_today')
        this.tomorrowButton = Selector('.scheduler-suggestions-item')
        this.upcomingButton = Selector('.item_content')
        this.moreTaskActionsButton = Selector ('.more_actions_button')
        this.moreTaskActionsOption = Selector ('.icon_menu_item__content')
        this.deleteTaskConfirmationButton = Selector ('.ist_button.ist_button_red')
    }
    
    // Funtion to create tasks with today or tomorrow due dates
    async createTask(title,date){
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
        }
    }
    // Function to create several tasks
    async createSeveralTasks (tasks){
        for (let index = 0; index < tasks; index++) {
            await this.createTask('Task '+index, DATES.TODAY)        
        } 
    }
    // Function to Validate if tasks created in these test, were created correctly
    async validateTasksCreated(numberOfTasks){
        let Result = true
        if (numberOfTasks == NUMBER_OF_TASKS.ONLYONE){
            let taskName = await this.taskCreated.nth(0).innerText
            if (taskName != NAMES.TASK_TODAY) {
                Result = false      
            }
        }
        else {
            for (let index = 0; index < numberOfTasks; index++) {           
                let taskName = await this.taskCreated.nth(index).innerText
                if (taskName != 'Task '+index) {
                    Result = false      
                }
            }
        }
        return Result  
    }
    // Function to delete all existent tasks 
    async deleteSeveralTasks(){
        let numberOfTasks = await this.taskCreated.count
        console.log(numberOfTasks)
        if (numberOfTasks > 0){
            for (let index = 0; index < numberOfTasks; index++) {
                await t
                .rightClick(this.taskCreated)
                .click(this.moreTaskActionsOption.nth(MORE_ACTIONS_MENU.DELETE_TASK))
                .click(this.deleteTaskConfirmationButton) 
            }        
        } 
    }
    // Function to validate if all the tasks were deleted.
    async validateTasksDeleted(){
        let Result = true
        let numberOfTasks = await this.taskCreated.count
        if (numberOfTasks > 0){
            Result = false
        }
        return Result 
    }
}

export default new TodayPage