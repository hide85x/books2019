export class AuthService {
    loggedIn=false
    
    isAuthenticated(){
        const promise= new Promise(
            (resolve, reject)=> {
                setTimeout(()=>{
                    resolve(this.loggedIn)
                },800)
            }
        );
        return promise
    }

    

    logIn(){
        this.loggedIn= !this.loggedIn
        console.log(this.loggedIn)
    }
    logOut(){
        this.loggedIn= false
    }
}