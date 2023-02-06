<%@page contentType="text/html; charset=utf-8"
        pageEncoding="utf-8" %>

<%
    // 21form.html에서 보낸 폼 데이터 출력하기
    //클라이언트가 전송한 폼 데이터를 jsp에서 가져오려면 request.getParameter(폼 요소 이름) 이용하면 됨
    request.setCharacterEncoding("UTF-8");
    String uid = request.getParameter("uid");
    String pwd = request.getParameter("pwd");
    String name = request.getParameter("name");
    String gender = request.getParameter("gender");   //버튼에서 지정한 name = 변수를 무조건 일치시켜야한다.

    if (gender.equals("m")) gender= "남자";   /*gender.equals('m') 은 gender == "m" 과 같다.*/
    else gender = "여자";

    //request.setCharacterEncoding("utf-8")로 설정해야한다. 한글 보이도록

%>
<%--doc 컨트롤 스페이스 누르고 엔터하면 기본 배경 나옴--%>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSP 처리결과</title>
</head>
<body>
    <H1>JSP 처리결과</H1>
    <p>아이디 : <% out.print(uid); %></p>
    <p>비밀번호 : <%=pwd %></p>
    <p>이름 : <%=name %></p>  <%--  위에있는 아이디를 그대로 실행하고 싶으면<%=name %>  --%>
    <p>성별 : <%=gender %></p>





</body>
</html>

