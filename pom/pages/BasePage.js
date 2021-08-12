import {Selector,t} from 'testcafe'
class BasePage{
    constructor(){
        // Top Menu
        this.searchBar = Selector('#quick_find')
        this.quickAddTaskButton = Selector('#quick_add_task_holder')
        // Left Menu
        this.leftMenu = Selector ('#left_menu')
        this.inboxLink = Selector('.item_content').withText('Inbox')
        this.todayLink = Selector('.item_content').withText('Today')
        this.upcomingLink = Selector('.item_content').withText('Upcoming')
        this.itemCounter = Selector('.item_counter')
        this.addProjectIcon = Selector('button[aria-label="Add Project"]')  
        this.projectsExpandButton = Selector('button[aria-label="Toggle list of Projects"]')
        // Modal Add project
        this.modalProjectNameInput = Selector('#edit_project_modal_field_name')
        this.modalProjectColorDropdown = Selector('.color_dropdown_select__color')
        this.modalProjectColorSelect = Selector('.color_dropdown_select__name') 
        this.modalProjectFavoriteCheckbox = Selector('.reactist_switch--handle')
        this.modalAddProjectButton = Selector('.ist_button.ist_button_red').withText('Add')
        // Project Sections
        this.projectList = Selector('#projects_list')
        this.projectListItem = Selector('#projects_list').find('li[data-type="project_list_item"]')
        this.favoriteListItem = Selector('ul[aria-label="Favorites"]').find('li[data-type="project_list_item"]')
        this.deleteProjectButton = Selector('#menu_delete_text')
        this.deleteProjectConfirmationButton = Selector('.ist_button_red').withText('Delete')
        this.projectMenu = Selector ('.menu')
    }

    // Function to Create a single project 
    async createProject(name,color,favorite){
        await t.click(this.addProjectIcon)
        await t.typeText(this.modalProjectNameInput, name, {paste:true})
        await t.click(this.modalProjectColorDropdown)
        await t.click(this.modalProjectColorSelect.withText(color))
        if (favorite){
            await t.click(this.modalProjectFavoriteCheckbox)
        }
        await t.click(this.modalAddProjectButton)    
    }

    // Function to delete all projects created before
    async deleteAllProjects(){
        let numberOfProjects = await this.projectListItem.count
        if (numberOfProjects > 0){
            for (let index = 0; index < numberOfProjects; index++) {
                await t
                .hover(this.leftMenu)
                .rightClick(this.projectListItem)
                .click(this.deleteProjectButton)
                .click(this.deleteProjectConfirmationButton)
            } 
        } 
    }
}
export default new BasePage