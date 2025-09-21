const bcrypt =require('bcrypt');

async function hashAndComparePassword(){
    const password='mySecurePassword';

    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        console.log('Password: ',password);
        console.log("Salt: ",salt);
        console.log('Hashed Password: ',hashedPassword);

        const inputPassword='mySecurePassword';
        const isMatch=await bcrypt.compare(inputPassword,hashedPassword);

        if(isMatch){
            console.log('Password is correct.')
    
        }else{
            console.log("Password is incorrect.");
        }
    }catch(error){
        console.log('Error: ',error);
    }
}

hashAndComparePassword();