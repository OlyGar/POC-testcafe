import {Selector, t} from 'testcafe'

class UpcomingPage {
    constructor(){
        this.taskListItem = Selector('.task_list_item')
        this.tomorrowTaskCreated = Selector('.markdown_content.task_content')
        this.sectionWrapper = Selector('.section__wrapper')
        this.taskListItemStyle = '.task_list_item'
    }

    // Function to Validate if tasks created in these test, were created correctly
    async validateTaskTomorrow(taskName,taskDate){
        
        /* 
         *Let totalTasks = await this.taskListItem.count
         *let tomorrowTasks = this.sectionWrapper.withText(taskDate).find(this.taskListItemStyle).count
         *console.log(totalTasks)
         *console.log(tomorrowTasks) 
         */       
        await t.expect(this.sectionWrapper.withText(taskDate).find(this.taskListItemStyle).innerText).contains(taskName)
        return true      
    }
}


    
export default new UpcomingPage