// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myRegister");
    if (form) {
        form.onsubmit = validateForm;
    }
}

function validateForm(event) {
    const errorMsg = document.getElementById("errormsg");
    const username = document.forms["myRegister"]["username"].value.trim();
    const passwords = document.forms["myRegister"]["password"];
    const password = passwords[0].value;
    const retypePassword = passwords[1].value;

    // 1. ตรวจสอบว่า Password ทั้ง 2 ช่องตรงกันหรือไม่
    if (password !== retypePassword) {
        alert("รหัสผ่านทั้งสองอันไม่เหมือนกัน");
        event.preventDefault(); 
        return false;
    }

    // 2. เคลียร์ข้อความแจ้งเตือนถ้าผ่านการตรวจสอบ
    errorMsg.innerHTML = "";

    // 3. บันทึกข้อมูลลงใน localStorage ทีละตัว
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("ลงทะเบียนเสร็จแล้วกำลังพาไป Login");

    // 4. นำทางไปหน้า login.html
    event.preventDefault(); 
    window.location.href = "login.html";
    return true;
}