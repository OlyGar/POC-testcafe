import {Selector} from 'testcafe'

class UpcomingPage {
    constructor(){
        this.tomorrowTaskCreated = Selector('.markdown_content.task_content')
        this.upcomingButton = Selector ('.item_content')
    }
}
export default new UpcomingPage