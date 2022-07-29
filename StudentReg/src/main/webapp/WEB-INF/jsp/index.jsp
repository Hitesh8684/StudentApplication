<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 

<!DOCTYPE html>
<html>
<head>


<meta charset="ISO-8859-1">
<title>Home</title>

<script type="text/javascript">
    function pressed(id){
        var btn=document.getElementById(id).value;
        alert("pressed"+btn);

        location.replace("/update/"+btn);
    }

    function pressedDelete(id){
        var btn=document.getElementById(id).value;
        location.replace("/delete/"+btn);
    }
</script>
</head>
<body>
    <div class="">Student List</div>
<form action="" action="post">
   <!--  <p>The .table-hover class enables a hover state on table rows:</p> -->           
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Stream</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        <c:forEach items="${studentList}" var="List">
      <tr>
        <td>${List.name}</td>
        <td>${List.gender}</td>
        <td>${List.stream}</td>
        <td>${List.age}</td>
        <td>${List.email}</td>
        
        <td><button type="button" class="btn btn-primary" id="${List.id}" value="${List.id}" onclick="pressed(${List.id})">Edit</button></td>
        <td><button type="button" class="btn btn-danger" id="${List.id}" value="${List.id}" onclick="pressedDelete(${List.id})">Delete</button></td>
      </tr>
     
     
  </c:forEach>
    </tbody>
     
 
</form>

<a href="/register">New Student</a>

</body>
</html>