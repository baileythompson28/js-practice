const validatePassword = function(password) {
    if (password.length < 8) {
        return false;
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            return true;
        }
    }
    return false;
};

console.log(validatePassword("hello")); 
console.log(validatePassword("password123")); 
console.log(validatePassword("abcdefgh")); 
console.log(validatePassword("abc12345")); 