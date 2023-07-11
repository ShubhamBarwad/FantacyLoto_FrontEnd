export default function login_validate(values){
    const errors = {}

    // Email Validation
    if(!values.email){
        errors.email="Required"
    }

    // Password Validation
    if(!values.password){
        errors.password='Required'
    }else if(values.password.length < 8){
        errors.password='Password too short'
    }else if(values.password.includes(' ')){
        errors.password = 'Invalid Password'
    }

    return errors
}