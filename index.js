//Requirements:
//A Student Manager App that is able to:
// - Show current student list
// - Add new Students
// - Save & Exit

var readlineSync = require('readline-sync');
var fs = require('fs'); //Đọc ghi file.

var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}//Đọc file và gán giá trị cho student

function showMenu(){
    console.log('1. Show current student list.');
    console.log('2. Creat a new student.');
    console.log('3. Save & Exit.');
    var option = readlineSync.question('Choose option: ');
    switch (option) {
        case '1':
            showCurrentStudentList();
            showMenu();
            break;
        case '2':
            creatNewStudent();
            showMenu();
            break;
        case '3':
            saveExit();
            break;        
        default:
            console.log('No this Option');
            showMenu();
            break;
    }
}//Hiển thị menu option

function showCurrentStudentList(){
    for(var student of students){
        console.log(student.name, student.age);
    }
}//Hiển thị danh sách students trong data.json

function creatNewStudent(){
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);// Thêm student mới vào mảng students
}//Tạo 1 một student mới

function saveExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {encoding: 'utf8' });
}//Lưu lại vào Data

function main(){
    loadData();
    showMenu();
}

main();
