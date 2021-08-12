import {Selector} from 'testcafe'

class UpcomingPage {
    constructor(){
        this.tomorrowTaskCreated = Selector('.markdown_content.task_content')
        this.upcomingLink = Selector('.item_content').withText('Upcoming')
    }
}
export default new UpcomingPage