import {Selector, t} from 'testcafe'
class LoginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('#login_form') 
        this.invalidEmail = Selector('.error_msg')
        this.invalidPassword = Selector('.error_msg')
        this.wrongPassword = Selector('.error_msg')
    }

    // Function to Log in
    async submitLoginForm(username,password){
        if (username != null){
            await t.typeText(this.emailInput, username, {paste:true})
        }
        if (password != null){
            await t.typeText(this.passwordInput, password, {paste:true})
        }
        await t.click(this.loginButton)
    }
}

export default new LoginPage
