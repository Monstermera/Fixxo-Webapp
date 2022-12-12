export const submitData = async (url:string, method:any, data:any, contentType = 'application/json') => {

    const res = await fetch(url, {
        method: method,
        headers: {
        'Content-Type': contentType
        },
        body: data
    })

    if (res.status === 200) 
        return true
    
    return false
}

export const validate = (e:any, form: any = null ) => {
   if (e.type === 'submit') {
    const errors:any = { }
    errors.name = validate_name(form.name)
    errors.email = validate_email(form.email)
    return errors

   } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
        }
   }
}

const validate_name = (value: string) => {
    if (!value)
        return 'A name is required'
    else if (value.length < 2)
        return 'Must be a valid name'
    else
        return null
}

const validate_email = (value: string) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address'
    else
        return null
}

export const validateText = (elementName: string, value: string, minLength:number = 2) => {
    if (value.length == 0)
        return `${elementName} is required`
    else if (value.length < minLength)
        return `${elementName} must contain at least ${minLength} characters`
    else
        return ''
}

