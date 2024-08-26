function appendToDisplay(value) {
    document.getElementById('display').value+=value;
    
}

/*document.getElementById('display') เพื่อให้แสดงผลครงช่อง display 
.value เพื่อเข้าไปเพิ่มค่าภายในช่องdisplay
+= เพิ่มค่าที่ส่งเข้ามาในvalue ในช่องแสดงผล*/


//func รีเช็ตเริ่มใหม่
function clearDisplay() {
    document.getElementById('display').value ='';
    
}

function calculateResult(){
    const display = document.getElementById('display')

        /*eval(): ฟังก์ชันใน JavaScript ที่ใช้ในการประเมิน (evaluate) โค้ด JavaScript ที่ส่งมาเป็นสตริง เช่น การคำนวณสมการทางคณิตศาสตร์จากสตริงที่ประกอบด้วยตัวเลขและตัวดำเนินการ*/ 
    try{
     display.value = eval(display.value);
    
    
    
    }catch(e){
        alert('Invalid expression');//ดักerror
    }
    
    /*ารใช้ eval() ค่อนข้างอันตรายหากไม่ได้ควบคุมการนำเข้าของผู้ใช้ (user input) เนื่องจากสามารถนำไปสู่ปัญหาด้านความปลอดภัย เช่น การโจมตีแบบ XSS (Cross-Site Scripting) หรือการรันโค้ดที่ไม่ปลอดภัยในระบบ*/ 
}
