import {Selector, t} from 'testcafe'
import {FAVORITES, MORE_PROJECT_ACTIONS, NAMES} from '../data/Constants'

class ProjectPage {
    constructor(){
        this.addProjectIcon = Selector('.adder_icon')
        this.projectName = Selector('#edit_project_modal_field_name')
        this.projectColor = Selector('.color_dropdown_select__color')
        this.projectColorSelect = Selector('.color_dropdown_select__name') 
        this.projectFavorite = Selector('.reactist_switch--handle')
        this.addProjectButton = Selector ('.ist_button.ist_button_red')
        this.projectCreated = Selector('.simple_content')  
        this.projectOptionsMenuButton = Selector ('button[aria-label="Project options menu"]')
        this.projectOptionsMenu = Selector ('.menu_item.icon_menu_item')
        this.deleteProjectConfirmationButton = Selector ('.ist_button.ist_button_red')
     }
    
    // Function to Create a single project 
    async createProject(name,color,favorite){
        await t.typeText(this.projectName, name, {paste:true})
        await t.click(this.projectColor)
        await t.click(this.projectColorSelect.withText(color))
        if (favorite == FAVORITES.YES){
            await t.click(this.projectFavorite)
        }
        await t.click(this.addProjectButton)    
    }
    // Function to Validate if project was created
    async validateProjectCreated(){
        let Result = true
        let projectName = await this.projectCreated.nth(2).innerText
        console.log(projectName)
        if (projectName != NAMES.PROJECT_NAME) {
            Result = false      
        }
        return Result
    }
    // Function to delete recently created project
    async deleteProject(){
        await t
            .click(this.projectOptionsMenuButton)
            .click(this.projectOptionsMenu.nth(MORE_PROJECT_ACTIONS.DELETE_PROJECT))
            .click(this.deleteProjectConfirmationButton) 
    }    
}
export default new ProjectPage
