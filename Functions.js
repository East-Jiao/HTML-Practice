//退出网页
function quit()
{
    if(confirm("确定要退出吗？"))
    {
        console.log("Window closed");
        window.close();
    }
    else
    {
        document.getElementById("password").value = "";
    }
}

//显示|隐藏密码
function toggle()
{
    const passwordInput = document.getElementById("password");
    const toggleBtn = document.querySelector(".toggle-btn");
    
    // 切换输入框类型：password ↔ text
    if (passwordInput.type == "password") 
    {
      passwordInput.type = "text";                  // 可见
      toggleBtn.textContent = "🙈";                // 切换图标为“闭眼”
    } 
    else 
    {
      passwordInput.type = "password";             // 不可见
      toggleBtn.textContent = "👁️";                // 切换图标为“睁眼”
    }
}

//检测账密是否为空并提示
function isempty()
{
    let passwordInput = document.getElementById("password").value.trim();
    let accountInput = document.getElementById("account").value.trim();
    var isOK = true;
    const pStatus = document.getElementById("ptips");
    const aStatus = document.getElementById("atips");
    
    //提示并且聚焦
    if(accountInput == "")
    {
        aStatus.style.display = "block";
        document.getElementById("account").focus();
        isOK = false;
    }
    else
    {
        aStatus.style.display = "none";
    }

    if(passwordInput == "")
    {
        pStatus.style.display = "block";
        isOK = false;
        if(accountInput != "")
        {
            document.getElementById("password").focus();
        }

    }
    else
    {
        pStatus.style.display = "none";
    }

    console.clear();        //玩一下console类
    
    if(isOK)
    {
        Goto();
    }
}

//跳转页面
function Goto()
{
    console.log("跳转新页面");
    window.location.href = "/Child1.html";
}