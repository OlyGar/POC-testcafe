import {Selector, t} from 'testcafe'

class ProjectPage {
    constructor(){
        // Project page
        this.projectOptionsMenuButton = Selector('button[aria-label="Project options menu"]')
        this.deleteProjectConfirmationButton = Selector ('.reactist_button.reactist_button--primary')
        // Project Menu
        this.projectMenuDeleteOption = Selector('.menu_item.icon_menu_item').withText('Delete project')
        this.projectMenuEditOption = Selector('.menu_item.icon_menu_item').withText('Edit project')
        // Modal Edit Project
        this.projectNameInput = Selector ('#edit_project_modal_field_name')
        this.projectColorDrowpdown = Selector ('.color_dropdown_toggle')
        this.projectFavoriteCheckbox = Selector ('.reactist_switch')
        this.editModalCancelButton = Selector ('.ist_button').withText('Cancel')
     }
    
    // Function to Validate if project was created
    async validateProjectOptimal(projectName,projectColor,isFavorite=false){
        let favoriteFlag = isFavorite
        let Result = false
        await t
            .click(this.projectOptionsMenuButton)
            .click(this.projectMenuEditOption)
        let createdProject = {
            name: await this.projectNameInput.value,
            color: await this.projectColorDrowpdown.innerText,
            isFavorite: await this.projectFavoriteCheckbox.hasClass('reactist_switch--checked')
        } 
        await t.click(this.editModalCancelButton)

        if (createdProject.name == projectName && createdProject.color == projectColor && createdProject.isFavorite == favoriteFlag){
            Result = true
        } 
        return Result 
    }   
    // Function to delete recently created project
    async deleteProject(){
        await t
            .click(this.projectOptionsMenuButton)
            .click(this.projectMenuDeleteOption)
            .click(this.deleteProjectConfirmationButton) 
    } 
}
export default new ProjectPage
