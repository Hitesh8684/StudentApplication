<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>

<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <form name="input-form" method="post" action="/newStudent">
       
        <table border="2" align="center">

              

           <input type="hidden" name="idtest" id="idtest" value="${student.id}">
            <tr>
                <td><label>Name</label></td><td><input type="text" name="stu_name" value="${student.name}"></td>
            </tr>
            <tr>
                <td><label>Stream</label></td><td><select name="stream"><option value="" disabled selected hidden>Please Choose...</option><option value="1">MCA</option><option value="2">BCA</option></select></td>
            </tr>
            <tr>
                <td><label>Gender</label></td><td><label>Male</label><input type="radio" name="gender" value="Male"><label>Female</label><input type="radio" name="gender" value="Female"></td>
            </tr>
            <tr>
                <td><label>Age</label></td><td><input type="text" name="age" value="${student.age}"></td>
            </tr>
            <tr>
                <td><label>Email</label></td><td><input type="email" name="email" value="${student.email}"></td>
            </tr>
            <tr>
                <td><input type="submit" name="submit" value="Submit"></td><td><input type="reset" name="reset" value="Clear"></td>
            </tr>
        
        </table>
        
    </form>
</section>

</body>
</html>